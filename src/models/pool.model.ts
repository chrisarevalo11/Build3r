import { BytesLike } from 'ethers'

import { FMetadata } from './profile.model'

export interface FMetadataDto {
	description: string
	image: string
	name: string
	tags: string[]
}

export interface FPool {
	id: string
	amount: string
	metadata: FMetadata
	strategy: string
	token: string
}

export interface FPoolDto {
	id: string
	amount: string
	metadata: FMetadataDto
	strategy: string
	token: string
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
	description: string
	image: File
	name: string
	tags: string[]
	managers: string[]
}

export interface SubGraphMetadata {
	__typename: 'Metadata'
	pointer: string
	protocol: number
}

export interface SubGraphPool {
	__typename: 'Pool'
	id: string
	amount: string
	metadata: SubGraphMetadata
	strategy: string
	token: string
}
