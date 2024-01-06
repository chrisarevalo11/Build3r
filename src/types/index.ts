import { Dispatch } from 'react'

export type grantFormValuesTypes = {
	amount: string
	description: string
	image: string
	name: string
	organizer: string
	tags: string[]
}

export type link = {
	text: string
	href: string
}

export type createPoolProps = {
	setFormValues: Dispatch<React.SetStateAction<grantFormValuesTypes>>
	profileName: string
}

export type Step = {
	title: string
	description: string
	icon: JSX.Element
}
