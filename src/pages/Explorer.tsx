import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAccount } from 'wagmi'

import { FProfile } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getProfile } from '@/store/thunks/profile.thunk'

export default function Explorer(): JSX.Element {
	const { address } = useAccount()
	const dispatch = useDispatch<AppDispatch>()
	const profile: FProfile = useAppSelector(state => state.profileSlice.profile)
	const fetched: boolean = useAppSelector(state => state.profileSlice.fetched)
	const loading: boolean = useAppSelector(state => state.uiSlice.loading)

	useEffect(() => {
		if (!fetched) {
			dispatch(getProfile(address as string))
		}
	}, [address, fetched, dispatch])

	return <p>Explorer: {loading ? 'loading...' : profile.nonce}</p>
}
