import PumpFun from "@/index";
import type { LoginMethod } from "./types";
import ky from "ky";

export default class AuthService {
	private namespace = "/auth";
	private url = `${PumpFun.baseApiUrl}${this.namespace}`;

	login: LoginMethod = async (body) => {
		const response = await ky.post(`${this.url}/login`, {
			headers: {
				"content-type": "application/json",
				origin: "https://pump.fun",
			},
			json: body,
		});
		return response.json();
	};
}
