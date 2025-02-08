import type { KingOfTheHill } from "./Coin";

export interface Meta {
	word: string;
	word_with_strength: string;
	score: number;
	total_txns: number;
	total_vol: number;
}

export interface MetaCoin extends KingOfTheHill {
	trending_rank: number;
}
