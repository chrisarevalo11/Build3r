import { recipientDtoToRecipient } from '@/functions/dtos/recipient.dtos'
import { getStrategiesContracts } from '@/functions/strategies/strategies.functions'
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
	console.log('recipient', recipient)
	return recipient
}
