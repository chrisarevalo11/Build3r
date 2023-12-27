import { Link } from 'react-router-dom'

export default function NavbarLogo(): JSX.Element {
	return (
		<div className='grow'>
			<Link to={'/'} className='flex items-center gap-2 w-fit'>
				<img
					src={'/images/logo.webp'}
					alt='logo'
					width={40}
					height={40}
					className='motion-safe:animate-spin-slow'
				/>
				<h4
					className={`hidden text-primary md:block font-medium font-sans text-2xl`}
				>
					NatureLink
				</h4>
			</Link>
		</div>
	)
}
