import { Link } from 'react-router-dom'

export default function NavbarLogo(): JSX.Element {
	return (
		<div className='grow'>
			<Link to={'/'} className='flex items-center gap-2 w-fit'>
				<img
					src={'/images/logo.webp'}
					alt='logo'
					width={100}
					height={100}
					className='motion-safe:animate-spin-slow'
				/>
			</Link>
		</div>
	)
}
