import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/container'

export default function NoProfile(): JSX.Element {
	const navigate = useNavigate()

	return (
		<Container className='grid md:grid-cols-2 justify-items-center items-center gap-10 md:px-4 my-10'>
			<img
				className='md:order-2 w-[60%] md:w-[90%] object-cover'
				src={'/images/no-profile.webp'}
				alt='create profile'
			/>
			<div className='space-y-4 flex flex-col items-center md:items-start'>
				<div className='text-center md:text-left'>
					<h1 className='font-soria text-primary text-5xl font-bold'>Ooops!</h1>
					<p className='text-lg text-pretty'>
						Seems that you don&apos;t have a profile. In order to create grants,
						you need to{' '}
						<span className='text-primary font-bold font-soria text-xl tracking-wide'>
							create a profile
						</span>
					</p>
				</div>
				<Button onClick={() => navigate('/profile')}>Create Profile</Button>
			</div>
		</Container>
	)
}
