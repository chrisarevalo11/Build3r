import { FPool, FPoolDto } from '@/models/pool.model'
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface InitialState {
	poolFetched: boolean
	pools: FPool[]
	poolsDto: FPoolDto[]
	poolsFetched: boolean
}

const initialState: InitialState = {
	poolFetched: false,
	pools: [],
	poolsDto: [],
	poolsFetched: false
}

export const poolSlice: Slice<InitialState> = createSlice({
	name: 'pool',
	initialState,
	reducers: {
		setPoolFetched: (state, action: PayloadAction<boolean>) => {
			state.poolFetched = action.payload
		},
		setPools: (state, action: PayloadAction<FPool[]>) => {
			state.pools = action.payload
		},
		setPoolsDto: (state, action: PayloadAction<FPoolDto[]>) => {
			state.poolsDto = action.payload
		},
		setPoolsFetched: (state, action: PayloadAction<boolean>) => {
			state.poolFetched = action.payload
		}
	}
})

export const { setPoolFetched, setPools, setPoolsDto, setPoolsFetched } =
	poolSlice.actions
export default poolSlice.reducer
