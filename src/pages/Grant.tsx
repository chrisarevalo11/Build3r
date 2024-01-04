import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import GrantPage from '@/components/grants/GrantPage'
import NotFound from '@/components/NotFound'
import { Container } from '@/components/ui/container'
import { FPoolDto } from '@/models/pool.model'
import { useAppSelector } from '@/store'

export default function Grant(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()
	const poolsDto: FPoolDto[] = useAppSelector(state => state.poolSlice.poolsDto)

	useEffect(() => {
		if (!address) {
			navigate('/')
		}
	}, [address, navigate])

	if (poolsDto.length === 0) {
		return <NotFound />
	}

	return (
		<Container>
			<GrantPage poolDto={poolsDto[0]} />
		</Container>
	)
}
