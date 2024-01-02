import {
	ARBITRUM_CHAIN_ID,
	ARBITRUM_SEPOLIA_RPC_URL
} from '@/constants/constans'
import { Allo, Registry } from '@allo-team/allo-v2-sdk/'

interface AlloContracts {
	allo: Allo
	registry: Registry
}

export function getAlloContracts(): AlloContracts {
	const registry: Registry = new Registry({
		chain: ARBITRUM_CHAIN_ID,
		rpc: ARBITRUM_SEPOLIA_RPC_URL
	})

	const allo: Allo = new Allo({
		chain: ARBITRUM_CHAIN_ID,
		rpc: ARBITRUM_SEPOLIA_RPC_URL
	})

	return { allo, registry }
}
