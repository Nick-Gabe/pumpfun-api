import PumpFun from "@/.";
import type {
	GetCoinCandlesticksMethod,
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
		return response.json();
	};

	/**
	 * @param mint Mint is the coin address, usually a string of 32 characters minimum.
	 */
	getCoin: GetCoinMethod = async (mint, searchParams) => {
		const response = await ky.get(`${this.url}/${mint}`, {
			searchParams,
		});
		return response.json();
	};

	getCoins: GetCoinsMethod = async (searchParams) => {
		const response = await ky.get(`${this.url}`, {
			searchParams,
		});
		return response.json();
	};

	/**
	 * @param creator This is the creator's address, not their username.
	 */
	getCoinsByCreator: GetCoinsByCreator = async (creator, searchParams) => {
		const response = await ky.get(`${this.url}/user-created-coins/${creator}`, {
			searchParams,
		});
		return response.json();
	};

	getLatestCoin: GetLatestCoinMethod = async () => {
		const response = await ky.get(`${this.url}/latest`);
		return response.json();
	};

	getSimilarCoins: GetSimilarCoinsMethod = async (searchParams) => {
		const response = await ky.get(`${this.url}/similar`, {
			searchParams,
		});
		return response.json();
	};

	/**
	 * @param mint Mint is the coin address, usually a string of 32 characters minimum.
	 */
	getCoinCandlesticks: GetCoinCandlesticksMethod = async (
		mint,
		searchParams,
	) => {
		const response = await ky.get(
			`${PumpFun.baseApiUrl}/candlesticks/${mint}`,
			{
				searchParams,
			},
		);
		return response.json();
	};
}
