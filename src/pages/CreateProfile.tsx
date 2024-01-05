import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import ProfileForm from '@/components/profile/ProfileForm'
import { Container } from '@/components/ui/container'
import Loader from '@/components/ui/Loader'
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
				<Loader />
			) : (
				<>
					<div className='w-full md:w-1/2 mx-auto text-center space-y-3'>
						<h1 className='text-5xl font-soria text-primary'>Create Profile</h1>
						<p className=' md:text-lg'>
							If you want to register your{' '}
							<span className='text-primary font-soria font-extrabold tracking-wide text-lg'>
								organization
							</span>{' '}
							in order to{' '}
							<span className='text-primary font-soria font-extrabold tracking-wide text-lg'>
								create grants
							</span>{' '}
							and get to know the people who will help you{' '}
							<span className='text-primary font-soria font-extrabold tracking-wide text-lg'>
								achieving your goals
							</span>
							, fill out this form...
						</p>
					</div>
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
