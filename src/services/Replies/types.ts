type Reply = import("models/Reply").Reply;
type CoinReply = import("models/Reply").CoinReply;
type UserReply = import("models/Reply").UserReply;

export type GetRepliesMethod = (searchParams: {
	/**
	 * @param limit Limit is the maximum number of replies to return. If not specified it will return Pump.fun's default limit.
	 */
	limit: number;
	/**
	 * @param offset Offset is the number of replies to skip before returning the result.
	 */
	offset: number;
}) => Promise<Reply[]>;

export type getCoinRepliesMethod = (
	mint: string,
	searchParams: {
		/**
		 * @param limit Limit is the maximum number of replies to return. If not specified it will return Pump.fun's default limit.
		 */
		limit: number;
		/**
		 * @param offset Offset is the number of replies to skip before returning the result.
		 */
		offset: number;
		/**
		 * @param user This is the user's address, not their username.
		 */
		user?: string;
		reverseOrder?: boolean;
	},
) => Promise<{
	replies: CoinReply[];
	hasMore: boolean;
	offset: number;
}>;

export type GetUserRepliesMethod = (
	user: string,
	searchParams: {
		/**
		 * @param limit Limit is the maximum number of replies to return. If not specified it will return Pump.fun's default limit.
		 */
		limit: number;
		/**
		 * @param offset Offset is the number of replies to skip before returning the result.
		 */
		offset: number;
	},
) => Promise<UserReply[]>;
