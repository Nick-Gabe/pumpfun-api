interface PhantomLoginBody {
	address: string;
	signature: string;
	timestamp: number;
}

export type LoginMethod = (body: PhantomLoginBody) => Promise<{
	address: string;
	roles: string[];
	group: string;
	era: string;
	eras: {
		era: string;
		group: string;
	}[];
	iat: number;
	exp: number;
}>;
