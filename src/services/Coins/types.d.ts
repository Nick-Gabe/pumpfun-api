declare type KingOfTheHillMethod = (searchParams?: {
	includeNsfw?: boolean;
}) => Promise<KingOfTheHill>;

declare type GetCoinMethod = (
	mint: string,
	searchParams?: {
		sync?: boolean;
	},
) => Promise<Coin>;

declare type GetCoinsMethod = (searchParams: {
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

declare type GetLatestCoinMethod = () => Promise<LatestCoin>;

declare type GetSimilarCoinsMethod = (searchParams: {
	/**
	 * @param mint Mint is the coin address, usually a string of 32 characters minimum.
	 */
	mint: string;
	/**
	 * @param limit Limit is the maximum number of coins to return. If not specified it will return Pump.fun's default limit.
	 */
	limit?: number;
}) => Promise<SimilarCoin[]>;

declare type GetCoinsByCreator = (
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
