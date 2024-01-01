import { FMetadata } from './profile.model'

export interface FRecipientSubmition {
	recipientId: string
	recipientAddress: string
	grantAmount: number
	metadata: FMetadata
}

export interface FRecipientSubmitionDto {
	anchor: string
	bio: string
	email: string
	fullname: string
	image: File | string
	grantPorcentage: number
	grantTotal: number
	organization: string
	wallet: string
}
