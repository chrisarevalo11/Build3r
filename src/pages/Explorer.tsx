import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import ProfileCard from '@/components/explore/ProfileCard'
import { FProfile, FProfileDto } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getProfiles } from '@/store/thunks/profile.thunk'

export default function Explorer(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const profiles: FProfileDto[] = useAppSelector(
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
					: profiles?.map((profile: FProfileDto, index: number) => {
							return <ProfileCard key={index} profileDto={profile} />
						})}
		</>
	)
}
