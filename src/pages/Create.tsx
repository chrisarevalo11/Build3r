import { useState } from 'react'

import CreateHero from '@/components/create/CreateHero'
import Hypercert from '@/components/create/Hypercert'
import ProjectForm from '@/components/create/ProjectForm'
import { Container } from '@/components/ui/container'
import { FormValuesTypes } from '@/types'

export default function Create(): JSX.Element {
	const initialValue: FormValuesTypes = {
		projectName: '',
		bannerImage: '',
		logo: '',
		description: '',
		link: '',
		amount: 0,
		startDate: '',
		endDate: '',
		scopeTags: '',
		contributors: ''
	}
	const [formValues, setFormValues] = useState<FormValuesTypes>(initialValue)

	return (
		<>
			<CreateHero />
			<Container className='flex flex-col justify-evenly items-center my-3 w-full gap-4 md:gap-8'>
				<div className='flex flex-col-reverse gap-5 lg:gap-0 w-full lg:flex-row justify-evenly items-center lg:items-start'>
					<ProjectForm formValues={formValues} setFormValues={setFormValues} />
					<Hypercert formValues={formValues} />
				</div>
			</Container>
		</>
	)
}
