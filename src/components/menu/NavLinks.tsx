import { Dispatch, SetStateAction } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { link } from '@/types'
import { Cross1Icon } from '@radix-ui/react-icons'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function NavLink({ text, href }: link): JSX.Element {
	const location = useLocation()
	const pathname = location.pathname

	const isActive = pathname === href

	return (
		<Link
			className={`hover:text-primary/70 transition-all rounded-xl px-3 py-1 ${
				isActive && 'bg-primary/80 text-white pointer-events-none'
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
			className={`hover:bg-white/20 transition-all w-full text-center py-3 ${
				isActive && 'bg-white/20 pointer-events-none'
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
			className={`fixed z-[10] h-[100vh] top-0 left-0 w-[70vw] max-w-[300px] flex flex-col gap-2 justify-center shadow-2xl bg-primary text-white font-bold rounded-box transition-all ${
				isSidebarOpen ? 'left-0 ' : '-left-[400px]'
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
			<div className='flex md:hidden justify-center gap-2'>
				<ConnectButton showBalance={false} chainStatus={'icon'} />
			</div>
			<button
				className='absolute top-5 right-5'
				onClick={() => setIsSidebarOpen(false)}
			>
				<Cross1Icon className='w-6 h-6' />
			</button>
		</ul>
	)
}

export default function NavLinks(): JSX.Element {
	return (
		<ul className='hidden lg:flex flex-row justify-center items-center gap-3 grow font-bold text-primary'>
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
		href: '/profile/create'
	}
]
