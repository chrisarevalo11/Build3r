import { Dispatch } from 'react'

export type grantFormValuesTypes = {
	name: string
	amount: string
	image: string
	tags: string | string[]
	organizer: string
	description: string
}

export type link = {
	text: string
	href: string
}

export type createPoolProps = {
	setFormValues: Dispatch<React.SetStateAction<grantFormValuesTypes>>
	profileName: string
}
