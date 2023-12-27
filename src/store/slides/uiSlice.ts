import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface InitialState {
	loading: boolean
}

const initialState: InitialState = {
	loading: false
}

export const uiSlice: Slice<InitialState> = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		}
	}
})

export const { setLoading } = uiSlice.actions
export default uiSlice.reducer
