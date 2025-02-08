import PumpFun, { apiClient } from "@/index";
import type { GetMyProfileMethod, LoginMethod } from "./types";

export default class AuthService {
	private namespace = "/auth";
	private url = `${PumpFun.baseApiUrl}${this.namespace}`;

	/**
	 * @description This method requires certain parameters that depend on your
	 * wallet, so it's recommended using {@link PumpFun.authenticate} instead.
	 * However, if you know what you're doing and need more control, you can
	 * do the request yourself, and the auth will be saved for future requests.
	 */
	login: LoginMethod = async (body) => {
		const response = await apiClient.post(`${this.url}/login`, {
			headers: {
				"content-type": "application/json",
				origin: "https://pump.fun",
			},
			json: body,
		});
		return response.json();
	};

	/**
	 * @requires Authentication
	 */
	getMyProfile: GetMyProfileMethod = async () => {
		const response = await apiClient.get(`${this.url}/my-profile`);
		return response.json();
	};
}
