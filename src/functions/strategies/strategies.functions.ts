import { ethers } from 'ethers'

import {
	DirectGrantsSimpleStrategy,
	// eslint-disable-next-line camelcase
	DirectGrantsSimpleStrategy__factory
} from '@/@types/typechain-types'
import directGrantsSimpleEstrategyJson from '@/assets/json/directgrantsimplestrategy.json'
import {
	ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY,
	ARBITRUM_SEPOLIA_RPC_URL
} from '@/constants/constans'

export function getStrategiesContracts(
	providerOrSigner?: ethers.Provider | ethers.Signer | undefined
) {
	let directGrantsSimple: DirectGrantsSimpleStrategy
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let directGrantsSimpleAny: any

	if (!providerOrSigner) {
		const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(
			ARBITRUM_SEPOLIA_RPC_URL
		)

		directGrantsSimple =
			// eslint-disable-next-line camelcase
			DirectGrantsSimpleStrategy__factory.connect(
				ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY,
				provider
			)

		directGrantsSimpleAny = new ethers.Contract(
			ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY,
			directGrantsSimpleEstrategyJson.abi,
			provider
		)
	} else {
		directGrantsSimple =
			// eslint-disable-next-line camelcase
			DirectGrantsSimpleStrategy__factory.connect(
				ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY,
				providerOrSigner
			)

		directGrantsSimpleAny = new ethers.Contract(
			ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY,
			directGrantsSimpleEstrategyJson.abi,
			providerOrSigner
		)
	}
	return { directGrantsSimple, directGrantsSimpleAny }
}
