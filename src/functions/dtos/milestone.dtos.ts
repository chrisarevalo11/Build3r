import { IPFS_PROTOCOL } from '@/constants/constans'
import {
	Metadata,
	Milestone,
	MilestoneDto,
	MilestoneEvidenceSubmission,
	MilestoneEvidenceSubmissionDto,
	MilestoneSubmission,
	MilestoneSubmissionDto
} from '@/models/milestone.model'
import { toDecimal } from '@/utils'

import {
	storageFile,
	storeObject
} from '../web3storage/metadata-store-data.functions'

export async function milestoneDtoToMilestone(
	milestoneSubmissionDto: MilestoneDto
): Promise<Milestone> {
	const response: Response = await fetch(
		milestoneSubmissionDto.metadata.pointer
	)
	const metadata: Metadata = await response.json()

	const milestone: Milestone = {
		amountPercentage: Number(milestoneSubmissionDto.amountPercentage),
		metadata,
		milestoneStatus: Number(milestoneSubmissionDto.milestoneStatus)
	}

	return milestone
}

export async function milestoneEvidenceDtoToMilestoneEvidecence(
	milestoneEvidenceSubmissionDto: MilestoneEvidenceSubmissionDto
): Promise<MilestoneEvidenceSubmission> {
	const imagesCid: string[] = await Promise.all(
		milestoneEvidenceSubmissionDto.images.map(
			async (image: File) => await storageFile(image)
		)
	)

	const filesCid: string[] = await Promise.all(
		milestoneEvidenceSubmissionDto.files.map(
			async (image: File) => await storageFile(image)
		)
	)

	const metadataCid: string = await storeObject({
		title: milestoneEvidenceSubmissionDto.title,
		description: milestoneEvidenceSubmissionDto.description,
		deadline: milestoneEvidenceSubmissionDto.deadline,
		images: imagesCid,
		files: filesCid,
		links: [...milestoneEvidenceSubmissionDto.links]
	})

	const milestoneSubmission: MilestoneEvidenceSubmission = {
		recipientId: milestoneEvidenceSubmissionDto.recipientId,
		milestoneId: milestoneEvidenceSubmissionDto.milestoneId,
		metadata: {
			protocol: IPFS_PROTOCOL,
			pointer: metadataCid
		}
	}

	return milestoneSubmission
}

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
		amountPercentage: toDecimal(milestoneSubmissionDto.amount),
		metadata: {
			protocol: IPFS_PROTOCOL,
			pointer: metadataCid
		},
		milestoneStatus: milestoneSubmissionDto.status
	}

	return milestoneSubmission
}
