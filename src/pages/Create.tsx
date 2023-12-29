import { useState } from 'react'

import CreateHero from '@/components/create/CreateHero'
import GrantCard from '@/components/create/GrantCard'
import ProjectForm from '@/components/create/ProjectForm'
import { Container } from '@/components/ui/container'
import { grantFormValuesTypes } from '@/types'

export default function Create(): JSX.Element {
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

	console.log(formValues)

	return (
		<>
			<CreateHero />
			<Container className='flex flex-col justify-evenly items-center my-3 w-full gap-4 md:gap-8'>
				<div className='flex flex-col-reverse gap-5 lg:gap-0 w-full lg:flex-row justify-evenly items-center lg:items-start'>
					<ProjectForm setFormValues={setFormValues} />
					<GrantCard formValues={formValues} />
				</div>
			</Container>
		</>
	)
}
