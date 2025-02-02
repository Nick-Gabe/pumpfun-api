type User = import("models/User").User;
type DetailedUser = import("models/User").DetailedUser;
type UserBalance = import("models/User").UserBalance;

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
