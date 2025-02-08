import type { User, DetailedUser, UserBalance } from "@/models/User";

export type SearchUsersMethod = (searchParams: {
	searchTerm: string;
}) => Promise<User[]>;

export type GetUserMethod = (address: string) => Promise<DetailedUser>;

export type GetUserBalanceMethod = (
	address: string,
	searchParams: {
		offset: number;
		limit?: number;
		minBalance?: number;
	},
) => Promise<UserBalance[]>;
