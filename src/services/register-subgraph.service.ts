import {
	ARBITRUM_REGISTER_SUBGRAPH_URL,
	PROFILE_NOT_FOUND
} from '@/constants/constans'
import { queryProfilesWhereOwner } from '@/queries/register'
import {
	ApolloClient,
	gql,
	InMemoryCache,
	NormalizedCacheObject
} from '@apollo/client'

function getApolloClient(): ApolloClient<NormalizedCacheObject> {
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

	const getProfileIdByOwner = async (address: string): Promise<string> => {
		const response = await client.query({
			query: gql(queryProfilesWhereOwner),
			variables: { owner: address }
		})

		if (response.data.profiles.length > 0) {
			return response.data.profiles[0].id
		}
		return PROFILE_NOT_FOUND
	}

	return {
		getProfileIdByOwner
	}
}
