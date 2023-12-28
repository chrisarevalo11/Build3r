import {
	FProfile,
	FProfileSubmition,
	SubGraphProfile
} from '@/models/profile.model'
import {
	CreateProfileArgs,
	Profile
} from '@allo-team/allo-v2-sdk/dist/Registry/types'

export function dtoToProfile(dto: Profile): FProfile {
	return {
		id: dto.id,
		nonce: dto.nonce,
		name: dto.name,
		metadata: {
			protocol: Number(dto.metadata.protocol),
			pointer: dto.metadata.pointer
		},
		owner: dto.owner,
		anchor: dto.anchor
	}
}

export function profileSubmitionToDto(
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
