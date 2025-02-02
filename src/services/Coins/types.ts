type Coin = import("models/Coin").Coin;
type KingOfTheHill = import("models/Coin").KingOfTheHill;
type LatestCoin = import("models/Coin").LatestCoin;
type CoinCandlestick = import("models/Coin").CoinCandlestick;

export type KingOfTheHillMethod = (searchParams?: {
	includeNsfw?: boolean;
}) => Promise<KingOfTheHill>;

export type GetCoinMethod = (
	mint: string,
	searchParams?: {
		sync?: boolean;
	},
) => Promise<Coin>;

export type GetCoinsMethod = (searchParams: {
	/**
	 * @param limit Limit is the maximum number of coins to return. If not specified it will return Pump.fun's default limit.
	 */
	limit: number;
	/**
	 * @param offset Offset is the number of coins to skip before returning the result.
	 */
	offset: number;
	order?: "asc" | "desc";
	searchTerm?: string;
	includeNsfw?: boolean;
	/**
	 * @param creator This is the creator's address, not their username.
	 */
	creator?: string;
	complete?: boolean;
}) => Promise<Coin[]>;

export type GetLatestCoinMethod = () => Promise<LatestCoin>;

export type GetSimilarCoinsMethod = (searchParams: {
	/**
	 * @param mint Mint is the coin address, usually a string of 32 characters minimum.
	 */
	mint: string;
	/**
	 * @param limit Limit is the maximum number of coins to return. If not specified it will return Pump.fun's default limit.
	 */
	limit?: number;
}) => Promise<Coin[]>;

export type GetCoinsByCreator = (
	creator: string,
	searchParams: {
		/**
		 * @param limit Limit is the maximum number of coins to return. If not specified it will return Pump.fun's default limit.
		 */
		limit: number;
		/**
		 * @param offset Offset is the number of coins to skip before returning the result.
		 */
		offset: number;
	},
) => Promise<Coin[]>;

export type GetCoinCandlesticksMethod = (
	/**
	 * @param mint Mint is the coin address, usually a string of 32 characters minimum.
	 */
	mint: string,
	searchParams?: {
		/**
		 * @param limit Limit is the maximum number of candles to return. If not specified it will return Pump.fun's default limit.
		 */
		limit?: number;
		/**
		 * @param offset Offset is the number of candles to skip before returning the result.
		 */
		offset?: number;
		timeframe?: number;
	},
) => Promise<CoinCandlestick[]>;
