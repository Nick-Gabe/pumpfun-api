import PumpFun from "@/.";
import ky from "ky";

export default class CoinsService {
	private namespace = "/coins";
	private url = `${PumpFun.baseApiUrl}${this.namespace}`;

	getKingOfTheHill: KingOfTheHillMethod = async (searchParams) => {
		const response = await ky.get(`${this.url}/king-of-the-hill`, {
			searchParams,
		});
		return response.json<KingOfTheHill>();
	};

	getCoin: GetCoinMethod = async (mint, searchParams) => {
		const response = await ky.get(`${this.url}/coin/${mint}`, {
			searchParams,
		});
		return response.json<Coin>();
	};
}
