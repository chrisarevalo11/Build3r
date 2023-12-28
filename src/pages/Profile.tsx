import { Link } from 'react-router-dom'

import ProfileForm from '@/components/profile/ProfileForm'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/container'
import { FProfile } from '@/models/profile.model'
import { useAppSelector } from '@/store'

export default function Profile(): JSX.Element {
	const profile: FProfile = useAppSelector(state => state.profileSlice.profile)

	return (
		// TODO: Add  Disclaimer component
		<Container className='flex flex-col gap-10 md:gap-4'>
			{profile.id === '' ? (
				<>
					<p>
						DISCLAIMER: You must create a profile organization to use this app.
					</p>
					<Link to={'/Create'}>
						<Button>Create profile</Button>
					</Link>
					<ProfileForm />
				</>
			) : (
				<ProfileForm />
			)}
		</Container>
	)
}
