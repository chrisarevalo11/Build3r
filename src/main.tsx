import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, arbitrumSepolia } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

import {
	darkTheme,
	getDefaultWallets,
	RainbowKitProvider
} from '@rainbow-me/rainbowkit'

import { store } from './store/index.ts'
import App from './App.tsx'

import '@rainbow-me/rainbowkit/styles.css'
import './index.css'

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[arbitrumSepolia, arbitrum],
	[publicProvider()]
)

const projectId: string = import.meta.env.VITE_WALLET_CONNECT_KEY || '0'

const { connectors } = getDefaultWallets({
	appName: 'NatureLink',
	projectId,
	chains
})

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<WagmiConfig config={wagmiConfig}>
				<RainbowKitProvider
					chains={chains}
					theme={darkTheme({
						accentColor: '#1EB854',
						accentColorForeground: 'white',
						borderRadius: 'large',
						fontStack: 'system',
						overlayBlur: 'small'
					})}
					modalSize='compact'
				>
					<App />
				</RainbowKitProvider>
			</WagmiConfig>
		</Provider>
	</React.StrictMode>
)
