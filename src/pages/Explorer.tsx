import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import ProfileCard from '@/components/explore/ProfileCard'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/container'
import Loader from '@/components/ui/Loader'
import { FProfileDto } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getProfiles } from '@/store/thunks/profile.thunk'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

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

	const [currentPage, setCurrentPage] = useState<number>(1)
	const itemsPerPage: number = 9

	useEffect(() => {
		if (!address) {
			navigate('/')
			return
		}
		if (!fetched) {
			dispatch(getProfiles({ first: itemsPerPage, skip: 0 }))
		}
	}, [address, fetched, dispatch, navigate, itemsPerPage])

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage)
		const skip = (newPage - 1) * itemsPerPage
		dispatch(getProfiles({ first: itemsPerPage, skip }))
	}

	return (
		<>
			<h1 className='text-center text-5xl font-bold font-soria text-primary'>
				Profiles
			</h1>
			<Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2'>
				{loading ? (
					<div className='absolute flex justify-center right-0 left-0'>
						<Loader />
					</div>
				) : profiles.length === 0 ? (
					'There are no profiles'
				) : (
					profiles?.map((profile: FProfileDto, index: number) => {
						return <ProfileCard key={index} profileDto={profile} />
					})
				)}
			</Container>
			<div className='flex justify-center items-center my-4 gap-5'>
				<Button
					className={`${currentPage === 1 && 'opacity-60 pointer-events-none'}`}
					onClick={() => handlePageChange(currentPage - 1)}
				>
					<ArrowLeftIcon width={20} height={20} />
				</Button>
				<div>page {currentPage}</div>
				<Button
					className={`${
						profiles.length === 0 ||
						(profiles.length < itemsPerPage && 'opacity-60 pointer-events-none')
					}`}
					onClick={() => handlePageChange(currentPage + 1)}
				>
					<ArrowRightIcon width={20} height={20} />
				</Button>
			</div>
		</>
	)
}
