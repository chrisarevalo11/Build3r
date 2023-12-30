export const queryPaginatedProfiles = `
    query Profiles($first: Int!, $skip: Int!) {
      profiles(orderBy: createdAt, orderDirection: desc, first: $first, skip: $skip) {
        id
        metadata {
         pointer
          protocol
        }
        nonce
        name
        owner {
          id
        }
        anchor
      }
    }
  `
export const queryProfilesWhereOwner = `
  query Profiles($owner: String) {
    profiles(where: {owner: $owner}) {
      id  
    }
  }
`
