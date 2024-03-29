import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import GrantCard from '@/components/create/GrantCard'
import Banner from '@/components/profile/Banner'
import CreateProfile from '@/components/profile/CreateProfile'
import Logo from '@/components/profile/Logo'
import Social from '@/components/profile/Social'
import StickyCard from '@/components/profile/StickyCard'
import { Container } from '@/components/ui/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getMyProfile } from '@/store/thunks/profile.thunk'

export default function MyProfile(): JSX.Element {
	const { address } = useAccount()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const profileDto: FProfileDto = useAppSelector(
		state => state.profileSlice.myProfileDto
	)
	const poolsDto: FPoolDto[] = useAppSelector(state => state.poolSlice.poolsDto)
	const fetched: boolean = useAppSelector(
		state => state.profileSlice.profileFetched
	)

	const organizer = profileDto.name

	useEffect(() => {
		if (!address) {
			navigate('/')
		}

		if (!fetched) {
			dispatch(getMyProfile(address as string))
		}
	}, [address, fetched, dispatch, navigate])

	return (
		<Container>
			{profileDto.id === '' ? (
				<CreateProfile />
			) : (
				<section className='my-10'>
					<Banner imageURL={profileDto.metadata.banner} />
					<Logo logoURL={profileDto.metadata.logo} />
					<div className='mx-2'>
						<h1 className='text-xl font-bold'>{profileDto.name}</h1>
						<h2 className='text-lg text-gray-800 font-bold'>
							{profileDto.metadata.slogan}
						</h2>
						<section className='grid lg:grid-cols-profile w-full gap-4 my-4'>
							<div className='space-y-5'>
								<div className='border-2 border-input rounded-xl p-2 lg:p-4'>
									<h3 className='text-lg font-bold my-2 flex items-center gap-x-2 text-primary'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='icon icon-tabler icon-tabler-access-point'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											strokeWidth='2'
											stroke='currentColor'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path stroke='none' d='M0 0h24v24H0z' fill='none' />
											<path d='M12 12l0 .01' />
											<path d='M14.828 9.172a4 4 0 0 1 0 5.656' />
											<path d='M17.657 6.343a8 8 0 0 1 0 11.314' />
											<path d='M9.168 14.828a4 4 0 0 1 0 -5.656' />
											<path d='M6.337 17.657a8 8 0 0 1 0 -11.314' />
										</svg>
										Social:
									</h3>
									<Social
										nonce={profileDto.nonce}
										website={profileDto.metadata.website}
										twitter={profileDto.metadata.handle}
									/>
								</div>
								<StickyCard
									className='block lg:hidden'
									profileDto={profileDto}
									poolsDto={poolsDto}
								/>

								<Tabs
									defaultValue='description'
									className='w-full row-start-2 border-2 border-input rounded-xl p-2 lg:p-4'
								>
									<TabsList>
										<TabsTrigger value='description'>Description</TabsTrigger>
										<TabsTrigger value='grants'>Grants</TabsTrigger>
									</TabsList>
									<TabsContent className='p-4' value='description'>
										<p>{profileDto.metadata.description}</p>
									</TabsContent>
									<TabsContent className='p-2' value='grants'>
										{poolsDto.map((pool: FPoolDto, index: number) => {
											const { description, image, name, tags } = pool.metadata
											const { amount } = pool
											return (
												<Link
													to={`/explore/${profileDto.anchor}/${pool.id}`}
													key={index}
												>
													<GrantCard
														formValues={{
															name,
															image,
															amount,
															tags,
															description,
															organizer
														}}
													/>
												</Link>
											)
										})}
									</TabsContent>
								</Tabs>
							</div>
							<StickyCard
								className='hidden lg:block'
								profileDto={profileDto}
								poolsDto={poolsDto}
							/>
						</section>
					</div>
				</section>
			)}
		</Container>
	)
}
