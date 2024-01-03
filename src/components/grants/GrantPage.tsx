import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import GrantBanner from '@/components/grants/GrantBanner'
import GrantDescription from '@/components/grants/GrantDescription'
import GrantHeader from '@/components/grants/GrantHeader'
import GrantTags from '@/components/grants/GrantTags'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'

import { Button } from '../ui/Button'

type Props = {
	pooldto: FPoolDto
	profile: FProfileDto
}

export default function GrantPage(props: Props): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()

	const { pooldto, profile } = props
	const { name: profileName } = profile
	const { logo } = profile.metadata

	const { amount } = pooldto
	const { name, description, image, tags } = pooldto.metadata

	useEffect(() => {
		if (!address) {
			navigate('/')
		}
	}, [address, navigate])

	return (
		<section className='w-full flex flex-col items-center border-2 border-input rounded-xl p-2 md:px-6'>
			<GrantBanner logo={logo} banner={image} />
			<GrantHeader name={name} amount={amount} profileName={profileName} />
			<div className='flex w-full flex-col md:flex-row my-5 gap-4'>
				<GrantDescription description={description} />
				<GrantTags tags={tags} />
			</div>
			<div className='grid w-full justify-items-center md:grid-cols-2 lg:grid-cols-3 my-5 gap-4'>
				<div className='w-full bg-primary text-white/90 rounded-xl p-2 md:p-4 space-y-2 flex flex-col'>
					<h3 className='font-bold text-lg'>1. Select the recipients</h3>
					<p className='text-white/80'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
						facere?
					</p>
					<Button className='self-end' variant={'secondary'}>
						Select
					</Button>
				</div>
				<div className='w-full bg-primary opacity-60 pointer-events-none text-white/90 rounded-xl p-2 md:p-4 space-y-2 flex flex-col'>
					<h3 className='font-bold text-lg'>2. Allocate the funds</h3>
					<p className='text-white/80'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
						facere?
					</p>
					<Button className='self-end' variant={'secondary'}>
						Allocate
					</Button>
				</div>
				<div className='w-full bg-primary opacity-60 pointer-events-none text-white/90 rounded-xl p-2 md:p-4 space-y-2 flex flex-col'>
					<h3 className='font-bold text-lg'>3. Evidence the impact</h3>
					<p className='text-white/80'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
						facere?
					</p>
					<Button className='self-end' variant={'secondary'}>
						Submit
					</Button>
				</div>
			</div>
		</section>
	)
}
