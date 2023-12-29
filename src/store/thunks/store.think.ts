import { createAsyncThunk } from '@reduxjs/toolkit'

import { destroyProfile } from '../slides/profileSlice'

export const destroyStore = createAsyncThunk(
	'profile/destroyStore',
	async (_, { dispatch }) => {
		dispatch(destroyProfile(''))
	}
)
