import type { PhantomSignatureEvent } from "@/services/Auth/Phantom/types";
import bs58 from "bs58";
import { rootDirname } from "@/index";
import path from "node:path";
import setupFileServer from "@/utils/setupFileServer";
import AuthService from "..";
import BrowserService from "@/services/Browser";
import type { PhantomLoginBody } from "../types";

// biome-ignore lint/complexity/noStaticOnlyClass: This service is going to have more methods in the future;
export default class PhantomService {
	static async connect() {
		const authService = new AuthService();
		const browserService = new BrowserService();

		const loginPagePort = 5500;
		const loginPageServer = setupFileServer(
			path.join(rootDirname, "public/phantom-login.html"),
		);
		loginPageServer.listen(loginPagePort, () =>
			console.debug(`login page listening on ${loginPagePort}`),
		);

		return (await browserService.runOnBrowser(async (browser) => {
			try {
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
				loginPageServer.close(() => console.debug("closing login page server"));
				await authService.login(encodedResult);
				return encodedResult;
			} catch (e) {
				loginPageServer.close(() =>
					console.debug("closing login page server due to error:", e),
				);
				return e;
			}
		})) as Promise<PhantomLoginBody>;
	}
}
