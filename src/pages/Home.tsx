import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { Contribute, Create, Evaluate, Final, Hero } from '@/components/landing'
import { Container } from '@/components/ui/container'
import { AppDispatch } from '@/store'
import { destroyStore } from '@/store/thunks/store.think'

export default function Home(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (!address) {
			dispatch(destroyStore())
		} else {
			navigate('/explore')
		}
	}, [address, dispatch, navigate])

	return (
		<Container className='flex flex-col gap-10 md:gap-4'>
			<Hero />
			<Create />
			<Contribute />
			<Evaluate />
			<Final />
		</Container>
	)
}
