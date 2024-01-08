import { FMetadata } from './profile.model'

export interface Metadata {
	title: string
	description: string
	deadline: string
	images?: string[]
	files?: string[]
	links?: string[]
}

interface MetadataDto {
	protocol: bigint
	pointer: string
}

export interface Milestone {
	amountPercentage: number
	metadata: Metadata
	milestoneStatus: number
}

export interface MilestoneDto {
	amountPercentage: bigint
	metadata: MetadataDto
	milestoneStatus: bigint
}

export interface MilestoneEvidenceSubmission {
	recipientId: string
	milestoneId: number
	metadata: FMetadata
}

export interface MilestoneEvidenceSubmissionDto {
	recipientId: string
	milestoneId: number
	title: string
	description: string
	deadline: string
	images: File[]
	files: File[]
	links: string[]
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
