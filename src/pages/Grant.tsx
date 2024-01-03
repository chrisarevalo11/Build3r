import GrantPage from '@/components/grants/GrantPage'
import { Container } from '@/components/ui/container'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { useAppSelector } from '@/store'

export default function Grant(): JSX.Element {
	const poolsDto: FPoolDto[] = useAppSelector(state => state.poolSlice.poolsDto)
	const profileDto: FProfileDto = useAppSelector(
		state => state.profileSlice.profileDto
	)

	console.log(poolsDto)

	return (
		<Container>
			<GrantPage pooldto={poolsDto[0]} profile={profileDto} />
		</Container>
	)
}
