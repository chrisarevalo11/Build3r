import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import CreateHero from '@/components/create/CreateHero'
import GrantCard from '@/components/create/GrantCard'
import GrantForm from '@/components/create/GrantForm'
import { Container } from '@/components/ui/container'
import { grantFormValuesTypes } from '@/types'

export default function Create(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()

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
		}
	}, [address, navigate])

	return (
		<section className='flex flex-col gap-10 lg:gap-[2rem]'>
			<CreateHero />
			<Container className='grid lg:grid-cols-2 gap-4 m-2 my-10'>
				<GrantForm setFormValues={setFormValues} />
				<GrantCard formValues={formValues} />
			</Container>
		</section>
	)
}
