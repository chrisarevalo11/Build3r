import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
// import { propousalSlice } from './slices/propousalSlice';
// import { natureLinkSlice } from './slices/natureLinkSlice';
// import { projectSlice } from './slices/projectSlice';

export const store = configureStore({
	reducer: {
		// natureLink: natureLinkSlice.reducer,
		// project: projectSlice.reducer,
		// propousal: propousalSlice.reducer,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
