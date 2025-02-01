import RepliesService from "@/services/Replies";
import ky from "ky";
import CoinsService from "services/Coins";

export default class PumpFun {
	static baseApiUrl = "https://frontend-api-v3.pump.fun";
	coins: CoinsService;
	replies: RepliesService;

	constructor() {
		this.coins = new CoinsService();
		this.replies = new RepliesService();
	}

	async health() {
		const response = await ky.get(`${PumpFun.baseApiUrl}/health`);
		return response.json() as Promise<{ status: string }>;
	}
}
