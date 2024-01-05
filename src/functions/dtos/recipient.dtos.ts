import { BytesLike } from 'ethers'

import {
	ALLOCATE_DATA_STRUCT_TYPES,
	RECIPIENT_DATA_STRUCT_TYPES
} from '@/constants/structs-types.constants'
import {
	FRecipientSubmition,
	FRecipientSubmitionDto,
	Metadata,
	Recipient,
	RecipientDto
} from '@/models/recipient.model'
import { dataArrayToBytes } from '@/utils'

import {
	storageFile,
	// storageFile,
	storeObject
} from '../web3storage/metadata-store-data.functions'

export async function recipientDtoToRecipient(
	recipientDto: RecipientDto
): Promise<Recipient> {
	try {
		const response: Response = await fetch(recipientDto.metadata.pointer)
		const metadata: Metadata = await response.json()

		return {
			grantAmount: Number(recipientDto.grantAmount),
			metadata,
			milestonesReviewStatus: Number(recipientDto.milestonesReviewStatus),
			recipientAddress: recipientDto.recipientAddress,
			recipientStatus: Number(recipientDto.recipientStatus),
			useRegistryAnchor: recipientDto.useRegistryAnchor
		}
	} catch (error) {
		console.error(error)
		return {
			grantAmount: Number(recipientDto.grantAmount),
			metadata: {
				bio: '',
				email: '',
				fullname: '',
				image: '',
				organization: ''
			},
			milestonesReviewStatus: Number(recipientDto.milestonesReviewStatus),
			recipientAddress: recipientDto.recipientAddress,
			recipientStatus: Number(recipientDto.recipientStatus),
			useRegistryAnchor: recipientDto.useRegistryAnchor
		}
	}
}

export async function fRecipientSubmitionDtoToFRecipientSubmition(
	frecipientSubmisionDto: FRecipientSubmitionDto
): Promise<BytesLike> {
	const imageCid: string = await storageFile(frecipientSubmisionDto.image)

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

export async function convertToAllocateData(
	address: string,
	amount: number
): Promise<BytesLike> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const frecipientSubmissionDataArray: any[] = [address, 2, amount]

	return dataArrayToBytes(
		ALLOCATE_DATA_STRUCT_TYPES,
		frecipientSubmissionDataArray
	)
}
