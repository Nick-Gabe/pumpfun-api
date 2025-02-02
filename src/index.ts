import CoinsService from "@/services/Coins";
import RepliesService from "@/services/Replies";
import UsersService from "@/services/Users";
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

	async health() {
		const response = await ky.get(`${PumpFun.baseApiUrl}/health`);
		return response.json() as Promise<{ status: string }>;
	}
}
