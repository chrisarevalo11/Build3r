import ProfileForm from '@/components/profile/ProfileForm'

export default function CreateProfile(): JSX.Element {
	return (
		<>
			<h1 className='text-3xl font-bold'>Create Profile</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 items-center'>
				<img src={'/images/create-profile.webp'} />
				<ProfileForm />
			</div>
		</>
	)
}
