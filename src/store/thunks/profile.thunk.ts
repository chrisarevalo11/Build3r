import { PROFILE_NOT_FOUND } from '@/constants/constans'
import { getAlloContracts } from '@/functions/allo-functions'
import { dtoToProfile } from '@/functions/dtos'
import { FProfile } from '@/models/profile.model'
import { getSubGraphData } from '@/services/register-subgraph.service'
import { Profile } from '@allo-team/allo-v2-sdk/dist/Registry/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { setFetched, setProfile } from '../slides/profileSlice'
import { setLoading } from '../slides/uiSlice'

export const getProfile = createAsyncThunk(
	'profile/getProfile',
	async (address: string, { dispatch }) => {
		const { registry } = getAlloContracts()
		const { getProfileIdByOwner } = getSubGraphData()

		dispatch(setLoading(true))

		const profileId: string = await getProfileIdByOwner(address)

		if (profileId === PROFILE_NOT_FOUND) {
			dispatch(setFetched(true))
			dispatch(setLoading(false))
			return
		}

		const profileDto: Profile = await registry.getProfileById(profileId)
		const profile: FProfile = dtoToProfile(profileDto)

		dispatch(setProfile(profile))
		dispatch(setFetched(true))
		dispatch(setLoading(false))
	}
)
