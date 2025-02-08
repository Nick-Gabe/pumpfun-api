import PumpFun, { apiClient } from "@/index";
import type { GetCurrentMetasMethod, SearchMetaCoinsMethod } from "./types";

export class MetasService {
	private namespace = "/metas";
	private url = `${PumpFun.baseApiUrl}${this.namespace}`;

	getCurrentMetas: GetCurrentMetasMethod = async () => {
		const response = await apiClient.get(`${this.url}/current`);
		return response.json();
	};

	searchMetaCoins: SearchMetaCoinsMethod = async (searchParams) => {
		const response = await apiClient.get(`${this.url}/search`, {
			searchParams,
		});
		return response.json();
	};
}
