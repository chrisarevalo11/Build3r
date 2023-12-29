import ProfileForm from '@/components/profile/ProfileForm'

export default function CreateProfile(): JSX.Element {
	return (
		<>
			<h1 className='text-3xl font-bold'>Create Profile</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 items-center relative overflow-hidden'>
				<img
					className='absolute md:static z-[-1] -right-[40%] w-[150%] md:w-full my-auto'
					src={'/images/create-profile.webp'}
					alt='create profile'
				/>
				<ProfileForm />
			</div>
		</>
	)
}
