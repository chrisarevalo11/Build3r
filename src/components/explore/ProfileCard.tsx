import { Link } from 'react-router-dom'

import { FProfileDto } from '@/models/profile.model'
import { formatAddress } from '@/utils'

type Props = {
	profileDto: FProfileDto
}

export default function ProfileCard(props: Props): JSX.Element {
	const { profileDto } = props
	const { name, owner, createdAt, metadata } = profileDto
	const { banner, logo, description } = metadata

	return (
		<article className='mx-auto mt-4 shadow-lg border border-border rounded-xl duration-300 hover:shadow-sm'>
			<Link to={'/profile/' + profileDto.id} className={'w-full'}>
				<img
					src={banner}
					loading='lazy'
					alt={name}
					className='w-full h-48 rounded-t-md'
				/>
				<div className='flex items-center mt-2 pt-3 ml-4 mr-2'>
					<div className='flex-none w-10 h-10 rounded-full'>
						<img
							src={logo}
							className='w-full h-full rounded-full'
							alt={'logo'}
						/>
					</div>
					<div className='ml-3'>
						<span className='block text-gray-900'>{name}</span>
						<span className='block text-gray-400 text-sm'>
							by {formatAddress(owner)}
						</span>
					</div>
				</div>
				<div className='pt-3 ml-4 mr-2 mb-3'>
					<p className='text-gray-700 text-sm my-1'>{description}</p>
					<h2 className='text-sm text-gray-400'>created on {createdAt}</h2>
				</div>
			</Link>
		</article>
	)
}
