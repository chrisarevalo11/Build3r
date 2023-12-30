import { ethers } from 'ethers'

import {
	Allo,
	// eslint-disable-next-line camelcase
	Allo__factory,
	Registry,
	// eslint-disable-next-line camelcase
	Registry__factory
} from '@/@types/typechain-types'
import alloContractJson from '@/assets/json/allo.json'
import registryContractJson from '@/assets/json/registry.json'

export function getAlloContracts(
	providerOrSigner: ethers.Provider | ethers.Signer
) {
	// eslint-disable-next-line camelcase
	const registry: Registry = Registry__factory.connect(
		registryContractJson.address,
		providerOrSigner
	)

	// eslint-disable-next-line camelcase
	const allo: Allo = Allo__factory.connect(
		alloContractJson.address,
		providerOrSigner
	)

	const alloAny = new ethers.Contract(
		alloContractJson.address,
		alloContractJson.abi,
		providerOrSigner
	)

	return { registry, allo, alloAny }
}
