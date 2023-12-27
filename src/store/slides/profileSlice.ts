import { FProfile } from '@/models/profile.model'
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface InitialState {
	profile: FProfile
}

const initialState: InitialState = {
	profile: {
		id: '',
		nonce: -1,
		name: '',
		metadata: { protocol: -1, pointer: '' },
		owner: '',
		anchor: ''
	}
}

export const profileSlice: Slice<InitialState> = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile: (state, action: PayloadAction<FProfile>) => {
			state.profile = action.payload
		}
	}
})

export const { setProfile } = profileSlice.actions
export default profileSlice.reducer
