export interface Reply {
	id: number;
	mint: string;
	file_uri: string | null;
	text: string;
	user: string;
	timestamp: number;
	hidden: boolean;
	is_banned: boolean;
}

export interface CoinReply extends Reply {
	signature: string | null;
	is_buy: boolean | null;
	sol_amount: number | null;
	total_likes: number;
	username: string | null;
	profile_image: string | null;
	liked_by_user: boolean;
}

export interface UserReply extends Omit<CoinReply, "is_banned" | "username"> {
	hidden_source: string | null;
	is_confirmed: boolean | null;
	id_text: string;
}
