import { ethers } from 'ethers'

import {
	DirectGrantsSimpleStrategy,
	// eslint-disable-next-line camelcase
	DirectGrantsSimpleStrategy__factory
} from '@/@types/typechain-types'
import directGrantsSimpleEstrategyJson from '@/assets/json/directgrantsimplestrategy.json'

export function getStrategiesContracts(
	providerOrSigner: ethers.Provider | ethers.Signer
) {
	const directGrantsSimple: DirectGrantsSimpleStrategy =
		// eslint-disable-next-line camelcase
		DirectGrantsSimpleStrategy__factory.connect(
			directGrantsSimpleEstrategyJson.address,
			providerOrSigner
		)

	const directGrantsSimpleAny = new ethers.Contract(
		directGrantsSimpleEstrategyJson.address,
		directGrantsSimpleEstrategyJson.abi,
		providerOrSigner
	)

	return { directGrantsSimple, directGrantsSimpleAny }
}
