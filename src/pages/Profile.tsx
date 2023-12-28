import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import CreateProfile from '@/components/profile/CreateProfile'
import { Container } from '@/components/ui/container'
import { FProfile } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getProfile } from '@/store/thunks/profile.thunk'

export default function Profile(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const profile: FProfile = useAppSelector(state => state.profileSlice.profile)
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
			) : profile.id === '' ? (
				<>
					<CreateProfile />
				</>
			) : (
				<>
					<p>{profile.id}</p>
					<p>{profile.name}</p>
					<p>{profile.anchor}</p>
					<p>{profile.metadata.protocol}</p>
					<p>{profile.metadata.pointer}</p>
					<p>{profile.nonce}</p>
					<p>{profile.owner}</p>
				</>
			)}
		</Container>
	)
}
