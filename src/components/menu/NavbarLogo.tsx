import { Link } from 'react-router-dom'

export default function NavbarLogo(): JSX.Element {
	return (
		<Link to={'/'}>
			<img
				src={'/images/logo.svg'}
				alt='logo'
				width={80}
				height={80}
				className='motion-safe:animate-spin-slow'
			/>
		</Link>
	)
}
