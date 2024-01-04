import { useNavigate } from 'react-router'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/container'

export default function NotFound(): JSX.Element {
	const navigate = useNavigate()

	return (
		<Container className='h-[60vh] justify-center items-center flex-col gap-5 text-center'>
			<img src='/images/404.webp' alt='404' className='h-full mx-auto' />
			<h1 className='text-3xl font-bold text-primary'>Ooops! Page not found</h1>
			<p className='my-3'>The page you are looking for does not exist.</p>
			<Button onClick={() => navigate('/')} className='w-fit mx-auto mb-10'>
				Go home
			</Button>
		</Container>
	)
}
