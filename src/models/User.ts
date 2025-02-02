export interface User {
	address: string;
	username: string;
	profile_image: string | null;
	bio: string | null;
	followers: number;
	following: number;
}

export interface DetailedUser extends User {
	likes_received: number;
	unread_notifs_count: number;
	mentions_received: number;
	last_username_update_timestamp: number;
}

export interface UserBalance {
	address: string;
	mint: string;
	balance: number;
	image_uri: string;
	symbol: string;
	name: string;
	market_cap: number;
	value: number;
}
