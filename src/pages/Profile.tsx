import CreateProfile from '@/components/profile/CreateProfile'
import { Container } from '@/components/ui/container'

export default function Profile(): JSX.Element {
	return (
		<Container className='flex flex-col gap-10 md:gap-4'>
			<CreateProfile />
		</Container>
	)
}
