import { milestoneDtoToMilestone } from '@/functions/dtos/milestone.dtos'
import { recipientDtoToRecipient } from '@/functions/dtos/recipient.dtos'
import { getStrategiesContracts } from '@/functions/strategies/strategies.functions'
import { Milestone, MilestoneDto } from '@/models/milestone.model'
import { Recipient, RecipientDto } from '@/models/recipient.model'

export async function getRecipientByProfileId(recipientId: string) {
	const { directGrantsSimple } = getStrategiesContracts()

	const recipientContract = await directGrantsSimple.getRecipient(recipientId)

	const recipientDto: RecipientDto = {
		useRegistryAnchor: recipientContract[0],
		recipientAddress: recipientContract[1],
		grantAmount: recipientContract[2],
		metadata: {
			protocol: recipientContract[3][0],
			pointer: recipientContract[3][1]
		},
		recipientStatus: recipientContract[4],
		milestonesReviewStatus: recipientContract[5]
	}

	const recipient: Recipient = await recipientDtoToRecipient(recipientDto)
	return recipient
}

export async function getMilestonesByRecipientId(recipientId: string) {
	const { directGrantsSimple } = getStrategiesContracts()

	const milestonesContract = await directGrantsSimple.getMilestones(recipientId)

	const milestonesDto: MilestoneDto[] = milestonesContract.map(
		milestoneContract => {
			const milestoneDto: MilestoneDto = {
				amountPercentage: milestoneContract[0],
				metadata: {
					protocol: milestoneContract[1][0],
					pointer: milestoneContract[1][1]
				},
				milestoneStatus: milestoneContract[2]
			}

			return milestoneDto
		}
	)

	const milestones: Milestone[] = await Promise.all(
		milestonesDto.map((milestoneDto: MilestoneDto) => {
			return milestoneDtoToMilestone(milestoneDto)
		})
	)

	return milestones
}
