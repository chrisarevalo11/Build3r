export const queryPoolsWhereOwner = `
  query Pools($first: Int!, $skip: Int!, $strategy: String) {
      pools(rderBy: createdAt, orderDirection: desc, first: $first, skip: $skip, where: {strategy: $strategy}) {
          id
          amount
          metadata {
              pointer
              protocol
          }
          strategy
          token
          createdAt
      }
  }

`
