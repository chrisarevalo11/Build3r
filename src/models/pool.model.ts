import { BytesLike } from 'ethers'

import { FMetadata } from './profile.model'

interface FMetadataDto {
	description: string
	image: File
	name: string
	tags: string[]
}

export interface FPoolSubmition {
	profileId: string
	strategy: string
	initStrategyData: BytesLike
	token: string
	amount: bigint
	metadata: FMetadata
	managers: string[]
}

export interface FPoolSubmitionDto {
	profileId: string
	strategy: string
	initStrategyData: BytesLike
	native: string
	amount: number
	metadata: FMetadataDto
	managers: string[]
}
