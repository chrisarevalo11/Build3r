import { ethers } from 'ethers'

import {
	DirectGrantsSimpleStrategy,
	// eslint-disable-next-line camelcase
	DirectGrantsSimpleStrategy__factory
} from '@/@types/typechain-types'
import directGrantsSimpleEstrategyJson from '@/assets/json/directgrantsimplestrategy.json'
import { ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY } from '@/constants/constans'

export function getStrategiesContracts(
	providerOrSigner: ethers.Provider | ethers.Signer
) {
	const directGrantsSimple: DirectGrantsSimpleStrategy =
		// eslint-disable-next-line camelcase
		DirectGrantsSimpleStrategy__factory.connect(
			ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY,
			providerOrSigner
		)

	const directGrantsSimpleAny = new ethers.Contract(
		ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY,
		directGrantsSimpleEstrategyJson.abi,
		providerOrSigner
	)

	return { directGrantsSimple, directGrantsSimpleAny }
}
