import inquirer from "inquirer";
import { exec } from "node:child_process";
import os from "node:os";
import puppeteer, { type Browser } from "puppeteer-core";
import { SUPPORTED_BROWSERS, type SupportedBrowserId } from "./browsers";

export default class BrowserService {
	private async decideBrowser() {
		const answer = await inquirer.prompt([
			{
				type: "list",
				name: "choice",
				message: "What browser do you want to use to authenticate?",
				choices: Object.entries(SUPPORTED_BROWSERS).map(([key, value]) => ({
					name: value.label,
					value: key,
				})),
			},
		]);
		return answer.choice as SupportedBrowserId;
	}

	private getOpenBrowserCommand(browserId: SupportedBrowserId) {
		const browserConfig = SUPPORTED_BROWSERS[browserId];
		switch (os.platform()) {
			case "darwin":
				return `open -a '${browserConfig.platforms.darwin}' --args --remote-debugging-port=9222`;
			case "linux":
				return `${browserConfig.platforms.linux} --remote-debugging-port=9222`;
			case "win32":
				return `start ${browserConfig.platforms.win32} --remote-debugging-port=9222`;
			default:
				throw new Error("Unsupported platform");
		}
	}

	async runOnBrowser(fn: (browser: Browser) => unknown) {
		const selectedBrowserId = await this.decideBrowser();
		return await new Promise((resolve, reject) => {
			exec(this.getOpenBrowserCommand(selectedBrowserId), async (err) => {
				if (err) {
					reject(`Error launching ${selectedBrowserId}: ${err}`);
					return;
				}
				await new Promise((r) => setTimeout(r, 1000));
				const puppeteerBrowser = await puppeteer.connect({
					browserURL: "http://localhost:9222",
					defaultViewport: null,
				});
				resolve(fn(puppeteerBrowser));
			});
		});
	}
}
