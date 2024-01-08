import { Milestone } from '@/models/milestone.model'
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface InitialState {
	milestones: Milestone[]
	milestonesFetched: boolean
}

const initialState: InitialState = {
	milestones: [],
	milestonesFetched: false
}

export const milestoneSlice: Slice<InitialState> = createSlice({
	name: 'milestone',
	initialState,
	reducers: {
		destroyMilestone: state => {
			state.milestones = initialState.milestones
			state.milestonesFetched = initialState.milestonesFetched
		},
		setMilestones: (state, action: PayloadAction<Milestone[]>) => {
			state.milestones = action.payload
		},
		setMilestonesFetched: (state, action: PayloadAction<boolean>) => {
			state.milestonesFetched = action.payload
		}
	}
})

export const { destroyMilestone, setMilestones, setMilestonesFetched } =
	milestoneSlice.actions

export default milestoneSlice.reducer
