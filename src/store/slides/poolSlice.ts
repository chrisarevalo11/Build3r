import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface InitialState {
	poolFetched: boolean
	poolsFetched: boolean
}

const initialState: InitialState = {
	poolFetched: false,
	poolsFetched: false
}

export const poolSlice: Slice<InitialState> = createSlice({
	name: 'pool',
	initialState,
	reducers: {
		setPoolFetched: (state, action: PayloadAction<boolean>) => {
			state.poolFetched = action.payload
		},
		setPoolsFetched: (state, action: PayloadAction<boolean>) => {
			state.poolFetched = action.payload
		}
	}
})

export const { setPoolFetched, setPoolsFetched } = poolSlice.actions
export default poolSlice.reducer
