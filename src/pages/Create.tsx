import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import CreateHero from '@/components/create/CreateHero'
import GrantCard from '@/components/create/GrantCard'
import GrantForm from '@/components/create/GrantForm'
import { Container } from '@/components/ui/container'
// import { FProfileDto } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getProfile } from '@/store/thunks/profile.thunk'
import { grantFormValuesTypes } from '@/types'

export default function Create(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()

	const dispatch = useDispatch<AppDispatch>()
	const profileDto = useAppSelector(state => state.profileSlice.profileDto)
	// const fetched = useAppSelector(state => state.profileSlice.profileFetched)

	const initialValue: grantFormValuesTypes = {
		name: '',
		amount: '',
		image: '',
		tags: '',
		organizer: '',
		description: ''
	}

	const [formValues, setFormValues] =
		useState<grantFormValuesTypes>(initialValue)

	useEffect(() => {
		if (!address) {
			navigate('/')
			return
		}

		dispatch(getProfile(address as string))
	}, [address, navigate, dispatch])

	return (
		<section className='flex flex-col gap-10 lg:gap-[2rem]'>
			<CreateHero />
			<Container className='grid lg:grid-cols-2 gap-4 m-2 my-10'>
				<GrantForm
					profileName={profileDto.name}
					setFormValues={setFormValues}
				/>
				<GrantCard formValues={formValues} />
			</Container>
		</section>
	)
}
