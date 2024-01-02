import { ethers } from 'ethers'

import { DirectGrantsSimpleStrategy } from '@/@types/typechain-types'
import { ARBITRUM_RECIPIENT_WALLET } from '@/constants/constans'
import { getStrategiesContracts } from '@/functions/strategies/strategies.functions'

export async function getRecipient(
	providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
) {
	const { directGrantsSimple } = getStrategiesContracts(providerOrSigner)

	const recipient: DirectGrantsSimpleStrategy.RecipientStructOutput =
		await directGrantsSimple.getRecipient(ARBITRUM_RECIPIENT_WALLET)

	console.log(recipient)
}
