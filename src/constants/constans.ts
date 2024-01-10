import { BytesLike, ethers } from 'ethers'

import { InitializeData } from '@/models/initialize-data.model'

import { INITIALIZE_DATA_STRUCT_TYPES } from './structs-types.constants'

/* ==============================================
	    Sepolia Arbitrum
	   ============================================== */

const abiCoder = new ethers.AbiCoder()

export const ARBITRUM_CHAIN_ID: number = 421614

export const ARBITRUM_NATIVE: string =
	'0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

export const ARBITRUM_REGISTER_SUBGRAPH_URL: string =
	'https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-arbitrum-sepolia'

export const ARBITRUM_SEPOLIA_RPC_URL: string =
	'https://sepolia-rollup.arbitrum.io/rpc'

export const ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY: string =
	'0xfb82d33dd44803c898e871174ee950ebc902e5f8'

export const ARBITRUM_RECIPIENT_WALLET: string =
	'0xa653d77d16e944508DC087948bBb59668C383351'

const ARBITRUM_POOL_INIT_STRATEGY_DATE_OBJECT: InitializeData = {
	registryGating: false,
	metadataRequired: true,
	grantAmountRequired: true
}

const ARBITRUM_POOL_INIT_STRATEGY_DATE_ARRAY: boolean[] = [
	ARBITRUM_POOL_INIT_STRATEGY_DATE_OBJECT.registryGating,
	ARBITRUM_POOL_INIT_STRATEGY_DATE_OBJECT.metadataRequired,
	ARBITRUM_POOL_INIT_STRATEGY_DATE_OBJECT.grantAmountRequired
]

export const ARBITRUM_INIT_STRATEGY_BYTES: BytesLike = abiCoder.encode(
	INITIALIZE_DATA_STRUCT_TYPES,
	ARBITRUM_POOL_INIT_STRATEGY_DATE_ARRAY
)

/* ==============================================
	    Text
	   ============================================== */

export const PROFILE_NOT_FOUND: string = 'Profile not found'
export const PROFILES_NOT_FOUND: string = 'Profiles not found'
export const POOLS_NOT_FOUND: string = 'Pools not found'

/* ==============================================
	    Decentralized storage protocols
	   ============================================== */

export const IPFS_PROTOCOL: number = 1

export const ETHEREUM_ADDRESSES_REGEX =
	/^(0x[a-fA-F0-9]{40})(, ?0x[a-fA-F0-9]{40})*$/
