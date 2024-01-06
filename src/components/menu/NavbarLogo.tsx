import { Link } from 'react-router-dom'

import Logo from '@/components/ui/Logo'

export default function NavbarLogo(): JSX.Element {
	return (
		<Link to={'/'}>
			<Logo />
		</Link>
	)
}
