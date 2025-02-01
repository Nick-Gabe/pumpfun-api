import PumpFun from "@/.";
import type { Coin, KingOfTheHill, LatestCoin } from "@/models/Coin";
import type {
	GetCoinMethod,
	GetCoinsByCreator,
	GetCoinsMethod,
	GetLatestCoinMethod,
	GetSimilarCoinsMethod,
	KingOfTheHillMethod,
} from "@/services/Coins/types";
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

	/**
	 * @param mint Mint is the coin address, usually a string of 32 characters minimum.
	 */
	getCoin: GetCoinMethod = async (mint, searchParams) => {
		const response = await ky.get(`${this.url}/${mint}`, {
			searchParams,
		});
		return response.json<Coin>();
	};

	getCoins: GetCoinsMethod = async (searchParams) => {
		const response = await ky.get(`${this.url}`, {
			searchParams,
		});
		return response.json<Coin[]>();
	};

	/**
	 * @param creator This is the creator's address, not their username.
	 */
	getCoinsByCreator: GetCoinsByCreator = async (creator, searchParams) => {
		const response = await ky.get(`${this.url}/user-created-coins/${creator}`, {
			searchParams,
		});
		return response.json<Coin[]>();
	};

	getLatestCoin: GetLatestCoinMethod = async () => {
		const response = await ky.get(`${this.url}/latest`);
		return response.json<LatestCoin>();
	};

	getSimilarCoins: GetSimilarCoinsMethod = async (searchParams) => {
		const response = await ky.get(`${this.url}/similar`, {
			searchParams,
		});
		return response.json<Coin[]>();
	};
}
