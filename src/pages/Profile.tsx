import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import CreateProfile from '@/components/profile/CreateProfile'
import { Container } from '@/components/ui/container'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getProfile } from '@/store/thunks/profile.thunk'

export default function Profile(): JSX.Element {
	const { address } = useAccount()

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const profileDto: FProfileDto = useAppSelector(
		state => state.profileSlice.profileDto
	)
	const poolsDto: FPoolDto[] = useAppSelector(state => state.poolSlice.poolsDto)
	const fetched: boolean = useAppSelector(
		state => state.profileSlice.profileFetched
	)
	const loading: boolean = useAppSelector(state => state.uiSlice.loading)

	useEffect(() => {
		if (!address) {
			navigate('/')
			return
		}
		if (!fetched) {
			dispatch(getProfile(address as string))
		}
	}, [address, fetched, dispatch, navigate])

	return (
		<Container className='flex flex-col gap-10 md:gap-4'>
			{loading ? (
				'loading...'
			) : profileDto.id === '' ? (
				<>
					<CreateProfile />
				</>
			) : (
				<>
					<p>{profileDto.name}</p>
					<p>{poolsDto.map(pool => pool.metadata.name).join(', ')}</p>
				</>
			)}
		</Container>
	)
}
