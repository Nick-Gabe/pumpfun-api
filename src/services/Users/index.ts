import PumpFun from "@/index";
import type {
	GetUserBalanceMethod,
	GetUserMethod,
	SearchUsersMethod,
} from "@/services/Users/types";
import ky from "ky";

export default class UsersService {
	private namespace = "/users";
	private url = `${PumpFun.baseApiUrl}${this.namespace}`;

	/**
	 * @requires Authentication
	 */
	searchUsers: SearchUsersMethod = async (searchParams) => {
		const response = ky.get(`${this.url}/search`, {
			searchParams,
		});
		return response.json();
	};

	getUser: GetUserMethod = async (address) => {
		const response = ky.get(`${this.url}/${address}`);
		return response.json();
	};

	/**
	 * @requires Authentication
	 * @param address This is the user address you want to check the balance of.
	 */
	getUserBalance: GetUserBalanceMethod = async (address, searchParams) => {
		const response = ky.get(`${PumpFun.baseApiUrl}/balances/${address}`, {
			searchParams,
		});
		return response.json();
	};
}
