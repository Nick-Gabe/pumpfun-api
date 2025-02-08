import PhantomService from "@/services/Auth/Phantom";
import CoinsService from "@/services/Coins";
import RepliesService from "@/services/Replies";
import UsersService from "@/services/Users";
import type { AuthenticationMethods } from "@/types";
import ky from "ky";
import AuthService from "./services/Auth";
import { CookieJar } from "tough-cookie";
import BookmarksService from "./services/Bookmarks";
import { MetasService } from "./services/Metas";

export const rootDirname = import.meta.dirname;

const cookieJar = new CookieJar();

/**
 * @description `apiClient` is a ky instance that automatically handles cookies.
 * This is needed for Pump.fun authentication, as it is cookie-based.
 */
export const apiClient = ky.extend({
	hooks: {
		beforeRequest: [
			async (request) => {
				const url = request.url;
				const cookies = await cookieJar.getCookies(url);
				const cookieString = cookies.join("; ");
				request.headers.set("cookie", cookieString);
			},
		],
		afterResponse: [
			async (request, options, response) => {
				const url = request.url;
				const cookies = response.headers.getSetCookie();
				if (cookies) {
					for (const cookie of cookies) {
						await cookieJar.setCookie(cookie, url);
					}
				}
			},
		],
	},
});

if (!process.env.NODEMON) {
	// Don't want to show debug logs in production
	console.log = () => {};
	console.debug = () => {};
}

export default class PumpFun {
	static baseApiUrl = "https://frontend-api-v3.pump.fun";
	coins: CoinsService;
	replies: RepliesService;
	users: UsersService;
	auth: AuthService;
	bookmarks: BookmarksService;
	metas: MetasService;

	constructor() {
		this.coins = new CoinsService();
		this.replies = new RepliesService();
		this.users = new UsersService();
		this.auth = new AuthService();
		this.bookmarks = new BookmarksService();
		this.metas = new MetasService();
	}

	async authenticate(via: AuthenticationMethods) {
		switch (via) {
			case "phantom":
				await PhantomService.connect();
		}
	}

	async health() {
		const response = await apiClient.get(`${PumpFun.baseApiUrl}/health`);
		return response.json() as Promise<{ status: string }>;
	}

	async solPrice() {
		const response = await apiClient.get(`${PumpFun.baseApiUrl}/sol-price`);
		return response.json() as Promise<{ solPrice: number }>;
	}
}
