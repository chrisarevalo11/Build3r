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
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-user-circle'
				width='44'
				height='44'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='#2c3e50'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
				<path d='M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
				<path d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855' />
			</svg>
		),
		title: 'Create a profile',
		description:
			'Start by creating a profile. This is essential for developers or investors to participate in projects. Your profile stores your credentials and history in the platform, facilitating trust and transparency.'
	},
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-home-ribbon'
				width='44'
				height='44'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='#2c3e50'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M16 15h5v7l-2.5 -1.5l-2.5 1.5z' />
				<path d='M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5' />
				<path d='M9 21v-6a2 2 0 0 1 2 -2h1.5' />
			</svg>
		),
		title: 'Create a pool',
		description:
			'Create a funding pool in Bild3r. This pool will be the source of funds for development projects. Investors can contribute to this pool, and it will be used to finance approved real estate development projects.'
	},
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-users-group'
				width='44'
				height='44'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='#2c3e50'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
				<path d='M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1' />
				<path d='M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
				<path d='M17 10h2a2 2 0 0 1 2 2v1' />
				<path d='M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
				<path d='M3 13v-1a2 2 0 0 1 2 -2h2' />
			</svg>
		),
		title: 'Set recipient',
		description:
			'Designate the recipient of the funds within Bild3r. This could be a real estate developer or a project team responsible for executing a development project. The recipient will receive funds as they meet predetermined milestones.'
	},
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-progress'
				width='44'
				height='44'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='#2c3e50'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M10 20.777a8.942 8.942 0 0 1 -2.48 -.969' />
				<path d='M14 3.223a9.003 9.003 0 0 1 0 17.554' />
				<path d='M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592' />
				<path d='M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305' />
				<path d='M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356' />
			</svg>
		),
		title: 'Set milestones',
		description:
			'Define specific milestones for each real estate project in Bild3r. Milestones could include phases like planning approval, completion of construction phases, or sales targets. These milestones are crucial for the release of funds.'
	},
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-progress-check'
				width='44'
				height='44'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='#2c3e50'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M10 20.777a8.942 8.942 0 0 1 -2.48 -.969' />
				<path d='M14 3.223a9.003 9.003 0 0 1 0 17.554' />
				<path d='M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592' />
				<path d='M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305' />
				<path d='M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356' />
				<path d='M9 12l2 2l4 -4' />
			</svg>
		),
		title: 'Review milestones',
		description:
			'Milestones set for a project are reviewed and approved by either the pool managers or a committee. This ensures that the milestones are realistic and aligned with the project’s goals.'
	},
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-currency-ethereum'
				width='44'
				height='44'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='#2c3e50'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M6 12l6 -9l6 9l-6 9z' />
				<path d='M6 12l6 -3l6 3l-6 2z' />
			</svg>
		),
		title: 'Distribution of funds',
		description:
			'Upon successful completion and verification of each milestone, funds are distributed from the pool to the project recipient in Bild3r. This ensures that funds are used appropriately and projects are progressing as planned.'
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
