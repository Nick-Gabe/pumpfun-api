import type { LatestCoin } from "./Coin";

export interface Bookmarks {
	id: string;
	user_id: string;
	name: string;
	created_at: string;
	bookmark_items: string[];
	preview_images: string[];
}

export interface BookmarkItem {
	item_id: string;
	created_at: string;
	details?: LatestCoin;
}

export interface Bookmark {
	id: string;
	user_id: string;
	name: string;
	created_at: string;
	items: BookmarkItem[];
}
