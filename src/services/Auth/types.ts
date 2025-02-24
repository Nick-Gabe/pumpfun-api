import type { Profile } from "@/models/Profile";

export interface PhantomLoginBody {
	address: string;
	signature: string;
	timestamp: number;
}

export type LoginMethod = (body: PhantomLoginBody) => Promise<Profile>;

export type GetMyProfileMethod = () => Promise<Profile>;
