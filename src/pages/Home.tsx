import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { Benefits, Hero, HowItWorks } from '@/components/landing'
import { Container } from '@/components/ui/container'
import { AppDispatch } from '@/store'
import { destroyStore } from '@/store/thunks/store.think'
import { Step } from '@/types'

const steps: Step[] = [
	{
		icon: <></>,
		title: 'Read the recipe',
		description:
			'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.'
	},
	{
		icon: <></>,
		title: 'lorem10',
		description:
			'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.'
	},
	{
		icon: <></>,
		title: 'lorem10',
		description:
			'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.'
	},
	{
		icon: <></>,
		title: 'lorem10',
		description:
			'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.'
	}
]

export default function Home(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (!address) {
			dispatch(destroyStore())
		}
	}, [address, dispatch, navigate])

	return (
		<Container className='flex flex-col gap-10 md:gap-4'>
			<Hero />
			<HowItWorks steps={steps} />
			<Benefits />
		</Container>
	)
}
