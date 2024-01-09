import ProfileForm from '@/components/profile/ProfileForm'
import { Container } from '@/components/ui/container'

export default function CreateProfile(): JSX.Element {
	return (
		<Container className='flex flex-col gap-10 md:gap-4'>
			<>
				<div className='w-full md:w-2/3 mx-auto text-center space-y-3'>
					<h1 className='text-5xl font-extrabold text-primary'>Create Profile</h1>
					<p className='md:text-lg'>
						Build and connect with the Bild3r community. Your profile is where you
						<span className='text-primary font-extrabold text-lg'>{' '}create</span> and share projects,
						<span className='text-primary font-extrabold text-lg'>{' '}track</span> their progress
						and <span className='text-primary font-extrabold text-lg'>allocate</span> funds collaboratively.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center relative overflow-hidden'>
					<img
						className='absolute md:static z-[-1] -right-[40%] w-[150%] md:w-full my-auto'
						src={'/images/create-profile.svg'}
						alt='create profile'
					/>
					<ProfileForm />
				</div>
			</>
		</Container>
	)
}
