import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { profileSlice } from './slides/profileSlice'
import { uiSlice } from './slides/uiSlice'

const rootReducer = combineReducers({
	profileSlice: profileSlice.reducer,
	uiSlice: uiSlice.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredPaths: ['profile.profile.metadata.protocol']
			}
		})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
