import { FProfile } from '@/models/profile.model'
import { Profile } from '@allo-team/allo-v2-sdk/dist/Registry/types'

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
