type Address = string;

export interface PhantomWindow extends Window {
	connectPhantomWallet: () => Promise<Address>;

	signMessage: () => Promise<{
		signature: Record<number, number>;
		timestamp: number;
	}>;

	connectAndSign: () => Promise<{
		address: Address;
		signature: Record<number, number>;
		timestamp: number;
	}>;
}
