export const queryProfilesWhereOwner = `
    query Profiles($owner: String) {
      profiles(where: {owner: $owner}) {
        id  
      }
    }
  `
