export interface FMetadata {
	protocol: number
	pointer: string
}

export interface FProfile {
	id: string
	nonce: number
	name: string
	metadata: FMetadata
	owner: string
	anchor: string
}
