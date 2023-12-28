import { FProfile } from '@/models/profile.model'
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface InitialState {
	profile: FProfile
	profileFetched: boolean
	profiles: FProfile[]
	profilesFetched: boolean
}

const initialState: InitialState = {
	profile: {
		id: '',
		nonce: -1,
		name: '',
		metadata: { protocol: -1, pointer: '' },
		owner: '',
		anchor: ''
	},
	profileFetched: false,
	profiles: [],
	profilesFetched: false
}

export const profileSlice: Slice<InitialState> = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile: (state, action: PayloadAction<FProfile>) => {
			state.profile = action.payload
		},
		setProfileFetched: (state, action: PayloadAction<boolean>) => {
			state.profileFetched = action.payload
		},
		setProfiles: (state, action: PayloadAction<FProfile[]>) => {
			state.profiles = action.payload
		},
		setProfilesFetched: (state, action: PayloadAction<boolean>) => {
			state.profilesFetched = action.payload
		}
	}
})

export const {
	setProfile,
	setProfileFetched,
	setProfiles,
	setProfilesFetched
} = profileSlice.actions
export default profileSlice.reducer
