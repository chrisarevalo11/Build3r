import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { FProfile } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getProfiles } from '@/store/thunks/profile.thunk'

export default function Explorer(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const profiles: FProfile[] = useAppSelector(
		state => state.profileSlice.profiles
	)
	const fetched: boolean = useAppSelector(
		state => state.profileSlice.profilesFetched
	)
	const loading: boolean = useAppSelector(state => state.uiSlice.loading)

	useEffect(() => {
		if (!address) {
			navigate('/')
			return
		}
		if (!fetched) {
			dispatch(getProfiles({ first: 8, skip: 0 }))
		}
	}, [address, fetched, dispatch, navigate])

	return (
		<>
			<p>Explorer:</p>
			{loading
				? 'loading...'
				: profiles.length === 0
					? 'Thre are not organisations'
					: profiles?.map((profile: FProfile, index: number) => {
							return (
								<div key={index}>
									<h1>Profile {index}</h1>
									<p>profile.anchor: </p>
									<p>{profile.anchor}</p>
									<p>profile.id: </p>
									<p>{profile.id}</p>
									<p>profile.metadata.pointer: </p>
									<p>{profile.metadata.pointer}</p>
									<p>profile.metadata.protocol: </p>
									<p>{profile.metadata.protocol}</p>
									<p>profile.name: </p>
									<p>{profile.name}</p>
									<p>profile.nonce: </p>
									<p>{profile.nonce}</p>
									<p>profile.owner: </p>
									<p>{profile.owner}</p>
								</div>
							)
						})}
		</>
	)
}
