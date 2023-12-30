import { useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { Container } from '@/components/ui/container'
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
	}, [address, dispatch, navigate, fetched])

	useEffect(() => {
		if (profileDto.id === '' && fetched) {
			navigate(`/profile/create`)
		}
	}, [profileDto, navigate, fetched])

	return (
		<Container>
			{loading ? (
				<div className='w-full flex justify-center'>
					<Oval
						height={50}
						width={50}
						strokeWidth={3}
						color='#f65f5b'
						secondaryColor='#f65f5b44'
					/>
				</div>
			) : (
				<>
					<p>{profileDto.anchor}</p>
					<p>{profileDto.id}</p>
					<img src={profileDto.metadata.banner} />
					<p>{profileDto.metadata.description}</p>
					<img src={profileDto.metadata.logo} />
					{profileDto?.metadata?.members?.map(
						(member: string, index: number) => <p key={index}>{member}</p>
					)}
					<p>{profileDto.metadata.slogan}</p>
					<p>{profileDto.metadata.website}</p>
					<p>{profileDto.metadata.twitter}</p>
					<p>{profileDto.name}</p>
					<p>{profileDto.nonce}</p>
					<p>{profileDto.owner}</p>
				</>
			)}
		</Container>
	)
}
