import { FMetadata } from './profile.model'

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
