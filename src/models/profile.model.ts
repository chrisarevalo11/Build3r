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

export interface FProfileSubmitionDto {
	owner: string
	nonce: number
	name: string
	banner: File
	logo: File
	slogan: string
	website: string
	twitter: string
	description: string
	members: string[]
}

export interface FProfileSubmition {
	nonce: number
	name: string
	metadata: FMetadata
	owner: string
	members: string[]
}

interface SubGraphAccount {
	__typename: 'Account'
	id: string
}

interface SubGraphMetadata {
	__typename: 'Metadata'
	pointer: string
	protocol: number
}

export interface SubGraphProfile {
	__typename: 'Profile'
	id: string
	metadata: SubGraphMetadata
	nonce: number
	name: string
	owner: SubGraphAccount
	anchor: string
}
