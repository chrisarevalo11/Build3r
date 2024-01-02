import { BytesLike } from 'ethers'

import { RECIPIENT_DATA_STRUCT_TYPES } from '@/constants/structs-types.constants'
import {
	FRecipientSubmition,
	FRecipientSubmitionDto
} from '@/models/recipient.model'
import { dataArrayToBytes } from '@/utils'

import {
	// storageFile,
	storeObject
} from '../web3storage/metadata-store-data.functions'

export async function fRecipientSubmitionDtoToFRecipientSubmition(
	frecipientSubmisionDto: FRecipientSubmitionDto
): Promise<BytesLike> {
	// const imageCid: string = await storageFile(frecipientSubmisionDto.image)
	const imageCid: string = frecipientSubmisionDto.image as string
	// const grantAmount: number = grantPorcetageToAmount(
	// 	frecipientSubmisionDto.grantPorcentage,
	// 	frecipientSubmisionDto.grantTotal
	// )

	const metadataArgs = {
		bio: frecipientSubmisionDto.bio,
		email: frecipientSubmisionDto.email,
		fullname: frecipientSubmisionDto.fullname,
		image: imageCid,
		organization: frecipientSubmisionDto.organization
	}

	const metadataCid: string = await storeObject(metadataArgs)

	const frecipientSubmision: FRecipientSubmition = {
		recipientId: frecipientSubmisionDto.wallet,
		recipientAddress: frecipientSubmisionDto.anchor,
		grantAmount: frecipientSubmisionDto.grantAmount,
		metadata: {
			protocol: 1,
			pointer: metadataCid
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const frecipientSubmissionDataArray: any[] = [
		frecipientSubmision.recipientId,
		frecipientSubmision.recipientAddress,
		frecipientSubmision.grantAmount,
		[
			frecipientSubmision.metadata.protocol,
			frecipientSubmision.metadata.pointer
		]
	]

	return dataArrayToBytes(
		RECIPIENT_DATA_STRUCT_TYPES,
		frecipientSubmissionDataArray
	)
}
