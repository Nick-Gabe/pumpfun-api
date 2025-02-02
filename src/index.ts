import PhantomService from "@/services/Auth/Phantom";
import CoinsService from "@/services/Coins";
import RepliesService from "@/services/Replies";
import UsersService from "@/services/Users";
import type { AuthenticationMethods } from "@/types";
import ky from "ky";

export default class PumpFun {
	static baseApiUrl = "https://frontend-api-v3.pump.fun";
	coins: CoinsService;
	replies: RepliesService;
	users: UsersService;

	constructor() {
		this.coins = new CoinsService();
		this.replies = new RepliesService();
		this.users = new UsersService();
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
