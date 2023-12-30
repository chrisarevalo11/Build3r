import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import ProfileForm from '@/components/profile/ProfileForm'
import { Container } from '@/components/ui/container'
import { FProfileDto } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getProfile } from '@/store/thunks/profile.thunk'

export default function CreateProfile(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const [loading, setLoading] = useState(false)
	const profileDto: FProfileDto = useAppSelector(
		state => state.profileSlice.profileDto
	)
	const fetched: boolean = useAppSelector(
		state => state.profileSlice.profileFetched
	)

	useEffect(() => {
		if (!address) {
			navigate('/')
			return
		}
		setLoading(true)
		if (!fetched) {
			dispatch(getProfile(address as string))
		}
		setLoading(false)
	}, [address, fetched, dispatch, navigate])

	useEffect(() => {
		if (profileDto.id !== '') {
			navigate(`/profile/${profileDto.id}`)
		}
	}, [profileDto, navigate])

	return (
		<Container className='flex flex-col gap-10 md:gap-4'>
			{loading ? (
				<Oval />
			) : (
				<>
					<h1 className='text-3xl font-bold'>Create Profile</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 items-center relative overflow-hidden'>
						<img
							className='absolute md:static z-[-1] -right-[40%] w-[150%] md:w-full my-auto'
							src={'/images/create-profile.webp'}
							alt='create profile'
						/>
						<ProfileForm />
					</div>
				</>
			)}
		</Container>
	)
}
