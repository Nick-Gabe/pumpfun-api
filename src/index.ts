import CoinsService from "services/Coins";

export default class PumpFun {
	static baseApiUrl = "https://frontend-api-v3.pump.fun";
	coins: CoinsService;

	constructor() {
		this.coins = new CoinsService();
	}
}
