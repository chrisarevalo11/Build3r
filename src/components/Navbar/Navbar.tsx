import { useState } from 'react'
import { useAccount } from 'wagmi'

import { ConnectButton } from '@rainbow-me/rainbowkit'

import Logo from './NavbarLogo'
import NavLinks, { NavLinksResponsive } from './NavLinks'

export default function Navbar(): JSX.Element {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
	const { isConnected } = useAccount()

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<nav className='navbar lg:min-w-fit lg:w-[60%] lg:max-w-[850px] lg:px-3 lg:rounded-full mx-auto flex justify-around lg:mt-5'>
			<div className='navbar-start'>
				{isConnected && (
					<div className='lg:hidden'>
						<button className='p-3' onClick={toggleSidebar}>
							<img
								className=''
								src={'/images/burger.svg'}
								alt='bars'
								width={20}
								height={20}
							/>
						</button>
						<NavLinksResponsive
							isSidebarOpen={isSidebarOpen}
							setIsSidebarOpen={setIsSidebarOpen}
						/>
					</div>
				)}
				<Logo />
			</div>
			{isConnected && (
				<div className='navbar-center hidden lg:flex'>
					<NavLinks />
				</div>
			)}

			<div className='navbar-end flex items-center gap-2'>
				<ConnectButton showBalance={false} chainStatus={'icon'} />
			</div>
		</nav>
	)
}
