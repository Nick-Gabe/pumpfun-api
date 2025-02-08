export interface Profile {
	address: string;
	roles: string[];
	group: string;
	era: string;
	eras: {
		era: string;
		group: string;
		tpc?: number;
	}[];
	iat: number;
	exp: number;
}
