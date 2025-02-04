import { exec } from "node:child_process";
import type { PhantomSignatureEvent } from "@/services/Auth/Phantom/types";
import puppeteer from "puppeteer-core";
import bs58 from "bs58";
import { rootDirname } from "@/index";
import path from "node:path";
import setupFileServer from "@/utils/setupFileServer";
import AuthService from "..";

// biome-ignore lint/complexity/noStaticOnlyClass: This service is going to have more methods in the future;
export default class PhantomService {
	static async connect() {
		const authService = new AuthService();

		const loginPagePort = 5500;
		const loginPageServer = setupFileServer(
			path.join(rootDirname, "public/phantom-login.html"),
		);
		loginPageServer.listen(loginPagePort, () =>
			console.debug(`login page listening on ${loginPagePort}`),
		);

		return await new Promise((resolve, reject) => {
			// @TODO: Support other browsers;
			exec(
				`open -a 'Google Chrome' --args --remote-debugging-port=9222`,
				async (err) => {
					if (err) {
						reject("Error launching Chrome: ${err}");
						return;
					}

					await new Promise((r) => setTimeout(r, 1000));

					try {
						const browser = await puppeteer.connect({
							browserURL: "http://localhost:9222",
							defaultViewport: null,
						});

						const page = await browser.newPage();
						await page.goto(`http://localhost:${loginPagePort}`);

						const result = await page.evaluate(
							async () =>
								new Promise<PhantomSignatureEvent>((resolve) => {
									window.addEventListener(
										"message",
										(event: MessageEvent<PhantomSignatureEvent>) => {
											if (event.data?.type === "SIGNATURE") {
												resolve(event.data);
											}
										},
									);
								}),
						);

						await page.close();
						const encodedResult = {
							...result,
							signature: bs58.encode(Object.values(result.signature)),
						};
						loginPageServer.close(() =>
							console.debug("closing login page server"),
						);
						resolve(authService.login(encodedResult));
					} catch (e) {
						loginPageServer.close(() =>
							console.debug("closing login page server due to error:", e),
						);
						reject(e);
					}
				},
			);
		});
	}
}
