import { FMetadata as FMetadaSubmition } from './profile.model'

export interface Metadata {
	bio: string
	email: string
	fullname: string
	image: string
	organization: string
}

export interface Recipient {
	grantAmount: number
	metadata: Metadata
	milestonesReviewStatus: number
	recipientAddress: string
	recipientStatus: number
	useRegistryAnchor: boolean
}

export interface FRecipientSubmition {
	recipientId: string
	recipientAddress: string
	grantAmount: number
	metadata: FMetadaSubmition
}

export interface FRecipientSubmitionDto {
	anchor: string
	bio: string
	email: string
	fullname: string
	image: File
	grantAmount: number
	organization: string
	wallet: string
}

export interface MetadataDto {
	protocol: bigint
	pointer: string
}

export interface RecipientDto {
	useRegistryAnchor: boolean
	recipientAddress: string
	grantAmount: bigint
	metadata: MetadataDto
	recipientStatus: bigint
	milestonesReviewStatus: bigint
}
