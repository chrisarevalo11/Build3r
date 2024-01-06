import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { milestoneSlice } from './slides/milestoneSlice'
import { poolSlice } from './slides/poolSlice'
import { profileSlice } from './slides/profileSlice'
import { recipientSlice } from './slides/recipientSlice'
import { uiSlice } from './slides/uiSlice'

const rootReducer = combineReducers({
	milestoneSlice: milestoneSlice.reducer,
	poolSlice: poolSlice.reducer,
	profileSlice: profileSlice.reducer,
	recipientSlice: recipientSlice.reducer,
	uiSlice: uiSlice.reducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
