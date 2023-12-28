import { FProfile } from '@/models/profile.model'
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface InitialState {
	fetched: boolean
	profile: FProfile
}

const initialState: InitialState = {
	fetched: false,
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
		setFetched: (state, action: PayloadAction<boolean>) => {
			state.fetched = action.payload
		},
		setProfile: (state, action: PayloadAction<FProfile>) => {
			state.profile = action.payload
		}
	}
})

export const { setFetched, setProfile } = profileSlice.actions
export default profileSlice.reducer
