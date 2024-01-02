import { FProfile, FProfileDto } from '@/models/profile.model'
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface InitialState {
	profile: FProfile
	profileDto: FProfileDto
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
	profileDto: {
		id: '',
		name: '',
		nonce: -1,
		metadata: {
			banner: '',
			logo: '',
			slogan: '',
			website: '',
			handle: '',
			description: '',
			members: []
		},
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
		destroyProfile: state => {
			state.profile = initialState.profile
			state.profileDto = initialState.profileDto
			state.profileFetched = initialState.profileFetched
			state.profiles = initialState.profiles
			state.profilesFetched = initialState.profilesFetched
		},
		setProfile: (state, action: PayloadAction<FProfile>) => {
			state.profile = action.payload
		},
		setProfileDto: (state, action: PayloadAction<FProfileDto>) => {
			state.profileDto = action.payload
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
	destroyProfile,
	setProfile,
	setProfileDto,
	setProfileFetched,
	setProfiles,
	setProfilesFetched
} = profileSlice.actions
export default profileSlice.reducer
