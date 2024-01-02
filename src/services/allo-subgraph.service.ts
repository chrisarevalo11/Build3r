import {
	ARBITRUM_REGISTER_SUBGRAPH_URL,
	POOLS_NOT_FOUND
} from '@/constants/constans'
import { subgraphPoolToFPool } from '@/functions/dtos/pool.dtos'
import { FPool, SubGraphPool } from '@/models/pool.model'
import { queryPoolsWhereOwner } from '@/queries/allo'
import {
	ApolloClient,
	gql,
	InMemoryCache,
	NormalizedCacheObject
} from '@apollo/client'

export function getApolloClient(): ApolloClient<NormalizedCacheObject> {
	if (ARBITRUM_REGISTER_SUBGRAPH_URL === '') {
		throw new Error('ARBITRUM_REGISTER_SUBGRAPH_URL is emply string')
	}

	return new ApolloClient({
		uri: ARBITRUM_REGISTER_SUBGRAPH_URL,
		cache: new InMemoryCache()
	})
}

export function getSubGraphData() {
	const client = getApolloClient()

	const getPaginatedPoolsByStrategy = async (
		first: number,
		skip: number,
		strategy: string
	): Promise<FPool[] | string> => {
		try {
			const response = await client.query({
				query: gql(queryPoolsWhereOwner),
				variables: { first, skip, strategy }
			})

			const fPools: FPool[] = response.data.pools.map(
				(subgraphProfile: SubGraphPool) => subgraphPoolToFPool(subgraphProfile)
			)

			return fPools
		} catch (error) {
			console.error(error)
			return POOLS_NOT_FOUND
		}
	}

	return {
		getPaginatedPoolsByStrategy
	}
}
