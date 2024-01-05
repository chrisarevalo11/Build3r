import { IPFS_PROTOCOL } from '@/constants/constans'
import {
	MilestoneSubmission,
	MilestoneSubmissionDto
} from '@/models/milestone.model'

import { storeObject } from '../web3storage/metadata-store-data.functions'

export async function milestoneSubmissionDtoToMilestoneSubmission(
	milestoneSubmissionDto: MilestoneSubmissionDto
): Promise<MilestoneSubmission> {
	const metadata = {
		title: milestoneSubmissionDto.title,
		description: milestoneSubmissionDto.description,
		deadline: milestoneSubmissionDto.deadline
	}

	const metadataCid: string = await storeObject(metadata)

	const milestoneSubmission: MilestoneSubmission = {
		amountPercentage: milestoneSubmissionDto.amount,
		metadata: {
			protocol: IPFS_PROTOCOL,
			pointer: metadataCid
		},
		milestoneStatus: milestoneSubmissionDto.status
	}

	return milestoneSubmission
}
