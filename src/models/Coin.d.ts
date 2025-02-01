declare interface Coin {
	mint: string;
	name: string;
	symbol: string;
	description: string;
	image_uri: string;
	metadata_uri: string;
	twitter: string;
	telegram: string;
	bonding_curve: string;
	associated_bonding_curve: string;
	creator: string;
	created_timestamp: number;
	raydium_pool: string | null;
	complete: boolean;
	virtual_sol_reserves: number;
	virtual_token_reserves: number;
	total_supply: number;
	website: string;
	show_name: boolean;
	king_of_the_hill_timestamp: number;
	market_cap: number;
	reply_count: number;
	nsfw: boolean;
	market_id: string | null;
	usd_market_cap: number;
	last_reply: number;
}

declare interface KingOfTheHill extends Coin {
	video_uri: string | null;
	inverted: string | null;
	is_currently_live: boolean;
	username: string | null;
	profile_image: string | null;
	last_reply: never;
}
