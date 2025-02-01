declare type KingOfTheHillMethod = (searchParams?: {
	includeNsfw?: boolean;
}) => Promise<KingOfTheHill>;

declare type GetCoinMethod = (
	mint: string,
	searchParams?: {
		sync?: boolean;
	},
) => Promise<Coin>;
