import { FrameIcon, GlobeIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

type Props = {
	nonce: number
	website: string
	twitter: string
}

export default function Social(props: Props): JSX.Element {
	const { nonce, website, twitter } = props

	return (
		<div className='grid md:grid-cols-2 gap-4 mx-6 mt-3 mb-6 text-gray-700'>
			<p className='flex items-center gap-3'>
				<FrameIcon /> Nonce {nonce}
			</p>
			<p className='truncate overflow-ellipsis flex items-center gap-3'>
				<GlobeIcon />{' '}
				<a
					href={website}
					target='_blank'
					className='text-primary underline'
					rel='noreferrer'
				>
					{website}
				</a>
			</p>
			<p className='flex items-center gap-3'>
				<TwitterLogoIcon /> {twitter}{' '}
			</p>
			<p></p>
		</div>
	)
}
