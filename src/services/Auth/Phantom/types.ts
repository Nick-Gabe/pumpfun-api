export interface PhantomSignatureEvent {
	type: "SIGNATURE";
	address: string;
	signature: Record<number, number>;
	timestamp: number;
}
