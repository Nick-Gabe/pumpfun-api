import PhantomService from "@/services/Auth/Phantom";
import CoinsService from "@/services/Coins";
import RepliesService from "@/services/Replies";
import UsersService from "@/services/Users";
import type { AuthenticationMethods } from "@/types";
import ky from "ky";
import AuthService from "./services/Auth";

export const rootDirname = import.meta.dirname;

if (!process.env.NODEMON) {
	console.log = () => {};
	console.debug = () => {};
}

export default class PumpFun {
	static baseApiUrl = "https://frontend-api-v3.pump.fun";
	coins: CoinsService;
	replies: RepliesService;
	users: UsersService;
	/**
	 * @description By default, authentication is handled automatically via the
	 * `authenticate` method. However, if you need more control, you can manage it
	 * manually by using the `auth` service.
	 */
	auth: AuthService;

	constructor() {
		this.coins = new CoinsService();
		this.replies = new RepliesService();
		this.users = new UsersService();
		this.auth = new AuthService();
	}

	async authenticate(via: AuthenticationMethods) {
		switch (via) {
			case "phantom":
				return await PhantomService.connect();
		}
	}

	async health() {
		const response = await ky.get(`${PumpFun.baseApiUrl}/health`);
		return response.json() as Promise<{ status: string }>;
	}

	async solPrice() {
		const response = await ky.get(`${PumpFun.baseApiUrl}/sol-price`);
		return response.json() as Promise<{ solPrice: number }>;
	}
}
