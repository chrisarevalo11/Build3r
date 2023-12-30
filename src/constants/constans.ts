import { BytesLike, ethers } from 'ethers'

import { InitializeData } from '@/models/initialize-data.model'

import { initializeDataStructTypes } from './structs-types'

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
	'0x7c061ba5c01e941faeba9fe3a10e2c6e1272fdf4'

const ARBITRUM_POOL_INIT_STRATEGY_DATE_OBJECT: InitializeData = {
	registryGating: true,
	metadataRequired: true,
	grantAmountRequired: true
}

const ARBITRUM_POOL_INIT_STRATEGY_DATE_ARRAY: boolean[] = [
	ARBITRUM_POOL_INIT_STRATEGY_DATE_OBJECT.registryGating,
	ARBITRUM_POOL_INIT_STRATEGY_DATE_OBJECT.metadataRequired,
	ARBITRUM_POOL_INIT_STRATEGY_DATE_OBJECT.grantAmountRequired
]

export const ARBITRUM_INIT_STRATEGY_BYTES: BytesLike = abiCoder.encode(
	initializeDataStructTypes,
	ARBITRUM_POOL_INIT_STRATEGY_DATE_ARRAY
)

/* ==============================================
	    Text
	   ============================================== */

export const PROFILE_NOT_FOUND: string = 'Profile not found'
export const PROFILES_NOT_FOUND: string = 'Profiles not found'

/* ==============================================
	    Decentralized storage protocols
	   ============================================== */

export const IPFS_PROTOCOL: number = 1

export const ETHEREUM_ADDRESSES_REGEX =
	/^(0x[a-fA-F0-9]{40})(, ?0x[a-fA-F0-9]{40})*$/
