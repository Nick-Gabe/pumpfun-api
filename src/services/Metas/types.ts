import type { Meta, MetaCoin } from "@/models/Meta";

export type GetCurrentMetasMethod = () => Promise<Meta[]>;

export type SearchMetaCoinsMethod = (searchParams: {
	/**
	 * @description The search query
	 */
	meta: string;
	includeNsfw?: boolean;
}) => Promise<MetaCoin[]>;
