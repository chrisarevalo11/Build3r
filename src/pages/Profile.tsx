import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import ProfileForm from '@/components/profile/ProfileForm'
import { Button } from '@/components/ui/Button'
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
		// TODO: Add  Disclaimer component
		<Container className='flex flex-col gap-10 md:gap-4'>
			{loading ? (
				'loading...'
			) : profile.id === '' ? (
				<>
					<p>
						DISCLAIMER: You must create a profile organization to use this app.
					</p>
					<Link to={'/Create'}>
						<Button>Create profile</Button>
					</Link>
					<ProfileForm />
				</>
			) : (
				<ProfileForm />
			)}
		</Container>
	)
}
