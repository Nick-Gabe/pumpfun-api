import { exec } from "node:child_process";
import type { PhantomWindow } from "@/services/Auth/Phantom/types";
import puppeteer from "puppeteer-core";
import bs58 from "bs58";
import ky from "ky";
import PumpFun from "@/index";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class PhantomService {
	static async connect() {
		return await new Promise((resolve, reject) => {
			exec(
				`open -a 'Google Chrome' --args --remote-debugging-port=9222`,
				async (err) => {
					if (err) {
						reject("Error launching Chrome: ${err}");
						return;
					}

					await new Promise((r) => setTimeout(r, 1000));

					const browser = await puppeteer.connect({
						browserURL: "http://localhost:9222",
						defaultViewport: null,
					});

					const page = await browser.newPage();
					await page.goto(
						// @TODO: Find a way to host this file locally (e.g. live-server);
						"http://127.0.0.1:5500/src/public/phantom-login.html",
					);

					// @TODO: Retry logic (e.g. message api);
					const result = await page.evaluate(async () => {
						const phantomWindow = window as unknown as PhantomWindow;
						return phantomWindow.connectAndSign?.();
					});

					if (result) {
						await page.close();
					}

					const encodedResult = {
						...result,
						signature: bs58.encode(Object.values(result.signature)),
					};

					// @TODO: This should set cookies for next requests;
					const response = ky.post(`${PumpFun.baseApiUrl}/auth/login`, {
						headers: {
							"content-type": "application/json",
							origin: "https://pump.fun",
						},
						json: encodedResult,
					});
					resolve(response.json());
				},
			);
		});
	}
}
