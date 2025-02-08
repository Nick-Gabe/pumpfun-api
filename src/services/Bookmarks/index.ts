import PumpFun, { apiClient } from "@/index";
import type {
	GetBookmarkMethod,
	GetBookmarksMethod,
	GetDefaultBookmarkMethod,
} from "./types";

export default class BookmarksService {
	private namespace = "/bookmarks";
	private url = `${PumpFun.baseApiUrl}${this.namespace}`;

	getBookmarks: GetBookmarksMethod = async (searchParams) => {
		const response = await apiClient.get(`${this.url}`, {
			searchParams,
		});
		return response.json();
	};

	getDefaultBookmark: GetDefaultBookmarkMethod = async (searchParams) => {
		const response = await apiClient.get(`${this.url}/default`, {
			searchParams,
		});
		return response.json();
	};

	getBookmark: GetBookmarkMethod = async (bookmarkId, searchParams) => {
		const response = await apiClient.get(`${this.url}/${bookmarkId}`, {
			searchParams,
		});
		return response.json();
	};
}
