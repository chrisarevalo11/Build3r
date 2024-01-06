import { FMetadata } from './profile.model'

export interface Metadata {
	title: string
	description: string
	deadline: string
}

export interface MetadataDto {
	protocol: bigint
	pointer: string
}

export interface Milestone {
	amountPercentage: numbe
	metadata: Metadata
	milestoneStatus: numbe
}

export interface MilestoneDto {
	amountPercentage: bigint
	metadata: MetadataDto
	milestoneStatus: bigint
}

export interface MilestoneSubmission {
	amountPercentage: bigint
	metadata: FMetadata
	milestoneStatus: number
}

export interface MilestoneSubmissionDto {
	title: string
	description: string
	deadline: string
	amount: number
	status: number
	wallet: string
}
