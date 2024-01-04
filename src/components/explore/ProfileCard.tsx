import { FProfileDto } from '@/models/profile.model'

type Props = {
	profileDto: FProfileDto
}

export default function ProfileCard(props: Props): JSX.Element {
	const { profileDto } = props
	const { name, owner, createdAt, metadata } = profileDto
	const { banner, logo, description, handle } = metadata
	return <div className='w-full flex flex-col'></div>
}
