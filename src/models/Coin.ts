export interface Coin {
	mint: string;
	name: string;
	symbol: string;
	description: string | null;
	image_uri: string | null;
	metadata_uri: string;
	twitter: string | null;
	telegram: string | null;
	bonding_curve: string;
	associated_bonding_curve: string;
	creator: string;
	created_timestamp: number;
	raydium_pool: string | null;
	complete: boolean;
	virtual_sol_reserves: number;
	virtual_token_reserves: number;
	total_supply: number;
	website: string | null;
	show_name: boolean;
	king_of_the_hill_timestamp: number | null;
	market_cap: number;
	reply_count: number;
	last_reply: number;
	nsfw: boolean;
	market_id: string | null;
	usd_market_cap: number;
}

export interface KingOfTheHill extends Omit<Coin, "last_reply"> {
	video_uri: string | null;
	inverted: string | null;
	is_currently_live: boolean;
	username: string | null;
	profile_image: string | null;
}

export interface LatestCoin extends Coin {
	hidden: string | null;
	last_trade_timestamp: number | null;
	real_sol_reserves: number;
	real_token_reserves: number;
	livestream_ban_expiry: number | null;
	is_banned: boolean;
	initialized: boolean;
	updated_at: number;
}

export interface CoinCandlestick {
	mint: string;
	timestamp: number;
	open: number;
	high: number;
	low: number;
	close: number;
	volume: number;
	slot: number;
	is_5_min: boolean;
	is_1_min: boolean;
}
