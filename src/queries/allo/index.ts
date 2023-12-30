export const queryPoolsWhereOwner = `
    query Pools($owner: String, $first: Int!, $skip: Int!) {
        pools(
            orderBy: createdAt
            orderDirection: desc
            first: $first
            skip: $skip
            where: {owner: $owner}
        ) {
            id
            strategy
            token
            amount
            metadata {
                pointer
                protocol
            }
        }
    }
`
