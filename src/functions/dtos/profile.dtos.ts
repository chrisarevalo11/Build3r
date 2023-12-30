import { IPFS_PROTOCOL } from '@/constants/constans'
import {
	FMetadataDto,
	FProfile,
	FProfileDto,
	FProfileSubmition,
	FProfileSubmitionDto,
	SubGraphProfile
} from '@/models/profile.model'
import {
	CreateProfileArgs,
	Profile
} from '@allo-team/allo-v2-sdk/dist/Registry/types'

import {
	storageFile,
	storeObject
} from '../web3storage/metadata-store-data.functions'

export function dtoToProfile(dto: Profile): FProfile {
	return {
		id: dto.id,
		nonce: Number(dto.nonce),
		name: dto.name,
		metadata: {
			protocol: Number(dto.metadata.protocol),
			pointer: dto.metadata.pointer
		},
		owner: dto.owner,
		anchor: dto.anchor
	}
}

export async function fProfileToFprofileDto(
	fProfile: FProfile
): Promise<FProfileDto> {
	const metadata: Response = await fetch(fProfile.metadata.pointer)
	const metadataDto: FMetadataDto = await metadata.json()

	return {
		id: fProfile.id,
		nonce: fProfile.nonce,
		name: fProfile.name,
		metadata: metadataDto,
		owner: fProfile.owner,
		anchor: fProfile.anchor
	}
}

export function fProfileSubmitionToDto(
	profile: FProfileSubmition
): CreateProfileArgs {
	return {
		nonce: profile.nonce,
		name: profile.name,
		metadata: {
			protocol: BigInt(profile.metadata.protocol),
			pointer: profile.metadata.pointer
		},
		owner: profile.owner,
		members: profile.members
	}
}

export function subgraphProfileToFProfile(
	subgraphProfile: SubGraphProfile
): FProfile {
	return {
		id: subgraphProfile.id,
		nonce: subgraphProfile.nonce,
		name: subgraphProfile.name,
		metadata: {
			protocol: subgraphProfile.metadata.protocol,
			pointer: subgraphProfile.metadata.pointer
		},
		owner: subgraphProfile.owner.id,
		anchor: subgraphProfile.anchor
	}
}

export async function fProfileSubmitionDtoToFProfileSubmition(
	fProfileSubmitionDto: FProfileSubmitionDto
): Promise<FProfileSubmition> {
	const bannerCid: string = await storageFile(fProfileSubmitionDto.banner)
	const logoCid: string = await storageFile(fProfileSubmitionDto.logo)

	const metadataArgs = {
		banner: bannerCid,
		logo: logoCid,
		slogan: fProfileSubmitionDto.slogan,
		website: fProfileSubmitionDto.website,
		handle: fProfileSubmitionDto.twitter,
		description: fProfileSubmitionDto.description,
		members: fProfileSubmitionDto.members
	}

	const metadataCid: string = await storeObject(metadataArgs)

	return {
		owner: fProfileSubmitionDto.owner,
		nonce: fProfileSubmitionDto.nonce,
		name: fProfileSubmitionDto.name,
		metadata: {
			protocol: IPFS_PROTOCOL,
			pointer: metadataCid
		},
		members: fProfileSubmitionDto.members
	}
}
