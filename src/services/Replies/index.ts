import PumpFun, { apiClient } from "@/.";
import type {
	GetRepliesMethod,
	GetUserRepliesMethod,
	getCoinRepliesMethod,
} from "@/services/Replies/types";

export default class RepliesService {
	private namespace = "/replies";
	private url = `${PumpFun.baseApiUrl}${this.namespace}`;

	/**
	 * @requires Authentication
	 */
	getReplies: GetRepliesMethod = async (searchParams) => {
		const response = await apiClient.get(`${this.url}`, {
			searchParams,
		});
		return response.json();
	};

	getCoinReplies: getCoinRepliesMethod = async (mint, searchParams) => {
		const response = await apiClient.get(`${this.url}/${mint}`, {
			searchParams,
		});
		return response.json();
	};

	/**
	 * @requires Authentication
	 * @param address This is the user's address, not their username.
	 */
	getUserReplies: GetUserRepliesMethod = async (user, searchParams) => {
		const response = await apiClient.get(`${this.url}/user-replies/${user}`, {
			searchParams,
		});
		return response.json();
	};
}
