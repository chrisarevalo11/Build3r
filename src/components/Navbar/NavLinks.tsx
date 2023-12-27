import { Dispatch, SetStateAction } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { link } from '@/types'

function NavLink({ text, href }: link): JSX.Element {
	const location = useLocation()
	const pathname = location.pathname

	const isActive = pathname === href

	return (
		<Link
			className={`hover:text-emerald-800 transition-all ${
				isActive && 'text-emerald-900 pointer-events-none'
			}`}
			to={href}
		>
			<li>{text}</li>
		</Link>
	)
}

type ResponsiveNavLinkProps = {
	text: string
	href: string
	setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

function ResponsiveNavLink({
	text,
	href,
	setIsSidebarOpen
}: ResponsiveNavLinkProps): JSX.Element {
	const location = useLocation()
	const pathname = location.pathname

	const isActive = pathname === href

	return (
		<Link
			className={`hover:text-emerald-800 transition-all ${
				isActive && 'text-emerald-900 pointer-events-none'
			}`}
			to={href}
			onClick={() => setIsSidebarOpen(false)}
		>
			<li>{text}</li>
		</Link>
	)
}

type NavLinksResponsiveProps = {
	isSidebarOpen: boolean
	setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export function NavLinksResponsive({
	isSidebarOpen,
	setIsSidebarOpen
}: NavLinksResponsiveProps): JSX.Element {
	return (
		<ul
			className={`absolute z-[10] h-[100vh] inset-0 flex flex-col items-center justify-center gap-20 shadow bg-gray-950 text-primary font-bold rounded-box transition-all ${
				isSidebarOpen ? 'top-0' : '-top-[200vh]'
			}`}
		>
			{links.map(item => (
				<ResponsiveNavLink
					setIsSidebarOpen={setIsSidebarOpen}
					key={item.text}
					text={item.text}
					href={item.href}
				/>
			))}
			<button onClick={() => setIsSidebarOpen(false)}>✖️</button>
		</ul>
	)
}

export default function NavLinks(): JSX.Element {
	return (
		<ul className='hidden lg:flex flex-row items-center gap-3 mx-7 grow font-bold text-green400'>
			{links.map(item => (
				<NavLink key={item.text} text={item.text} href={item.href} />
			))}
		</ul>
	)
}

const links: link[] = [
	{
		text: 'Create',
		href: '/create'
	},
	{
		text: 'Explore',
		href: '/explore'
	},
	{
		text: 'Profile',
		href: '/profile/1'
	}
]
