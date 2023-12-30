import { IPFS_PROTOCOL } from '@/constants/constans'
import {
	FMetadataDto,
	FPool,
	FPoolDto,
	FPoolSubmition,
	FPoolSubmitionDto,
	SubGraphPool
} from '@/models/pool.model'

import {
	storageFile,
	storeObject
} from '../web3storage/metadata-store-data.functions'

export function subgraphPoolToFPool(subgraphPool: SubGraphPool): FPool {
	const date: string = new Date(subgraphPool.createdAt * 1000)
		.toISOString()
		.split('T')[0]

	return {
		id: subgraphPool.id,
		amount: subgraphPool.amount,
		metadata: {
			protocol: subgraphPool.metadata.protocol,
			pointer: subgraphPool.metadata.pointer
		},
		strategy: subgraphPool.strategy,
		token: subgraphPool.token,
		createdAt: date
	}
}

export async function fPoolToFpoolDto(fPool: FPool): Promise<FPoolDto> {
	const metadadata: Response = await fetch(fPool.metadata.pointer)
	const metadataDto: FMetadataDto = await metadadata.json()

	return {
		id: fPool.id,
		amount: fPool.amount,
		metadata: metadataDto,
		strategy: fPool.strategy,
		token: fPool.token,
		createdAt: fPool.createdAt
	}
}

export async function fPoolSubmitionDtoToFPoolSubmition(
	fPoolSubmiton: FPoolSubmitionDto
): Promise<FPoolSubmition> {
	const imageCid: string = await storageFile(fPoolSubmiton.image)

	const metadataArgs = {
		description: fPoolSubmiton.description,
		image: imageCid,
		name: fPoolSubmiton.name,
		tags: fPoolSubmiton.tags
	}

	const metadataCid: string = await storeObject(metadataArgs)

	return {
		profileId: fPoolSubmiton.profileId,
		strategy: fPoolSubmiton.strategy,
		initStrategyData: fPoolSubmiton.initStrategyData,
		token: fPoolSubmiton.native,
		amount: BigInt(fPoolSubmiton.amount),
		metadata: {
			protocol: IPFS_PROTOCOL,
			pointer: metadataCid
		},
		managers: fPoolSubmiton.managers
	}
}
