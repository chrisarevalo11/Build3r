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
		icon:<></>,
		title: 'Create a profile',
		description:
			'Start by creating a profile. This is essential for developers or investors to participate in projects. Your profile stores your credentials and history in the platform, facilitating trust and transparency.'
	},
	{
		icon: <></>,
		title: 'Create a pool',
		description:
			'Create a funding pool in Bild3r. This pool will be the source of funds for development projects. Investors can contribute to this pool, and it will be used to finance approved real estate development projects.'
	},
	{
		icon: <></>,
		title: 'Set recipient',
		description:
			'Designate the recipient of the funds within Bild3r. This could be a real estate developer or a project team responsible for executing a development project. The recipient will receive funds as they meet predetermined milestones.'
	},
	{
		icon: <></>,
		title: 'Set milestones',
		description:
			'Define specific milestones for each real estate project in Bild3r. Milestones could include phases like planning approval, completion of construction phases, or sales targets. These milestones are crucial for the release of funds.'
	},
	{
		icon: <></>,
		title: 'Review milestones',
		description:
			'Milestones set for a project are reviewed and approved by either the pool managers or a committee. This ensures that the milestones are realistic and aligned with the project’s goals.'
	},
	{
		icon: <></>,
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
