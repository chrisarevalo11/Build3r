import { useEffect } from 'react'
import { BytesLike, ethers } from 'ethers'
import { Oval } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import Banner from '@/components/profile/Banner'
import Logo from '@/components/profile/Logo'
import Member from '@/components/profile/Member'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ARBITRUM_RECIPIENT_WALLET } from '@/constants/constans'
import { fRecipientSubmitionDtoToFRecipientSubmition } from '@/functions/dtos/recipient.dtos'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { FRecipientSubmitionDto } from '@/models/recipient.model'
import { AppDispatch, useAppSelector } from '@/store'
import { setLoading } from '@/store/slides/uiSlice'
import { getProfile } from '@/store/thunks/profile.thunk'
import { addRecipient } from '@/store/thunks/recipient.thunk'

import Social from './Social'

export default function Profile(): JSX.Element {
	const { address } = useAccount()

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const profileDto: FProfileDto = useAppSelector(
		state => state.profileSlice.profileDto
	)
	const poolsDto: FPoolDto[] = useAppSelector(state => state.poolSlice.poolsDto)
	const fetched: boolean = useAppSelector(
		state => state.profileSlice.profileFetched
	)

	const poolDto: FPoolDto = poolsDto[0]
	const loading: boolean = useAppSelector(state => state.uiSlice.loading)

	const onAddRecipient = async () => {
		dispatch(setLoading(true))
		const fullname: string = 'Santiago Viana'
		const bio: string = 'I am a software developer'
		const organization = 'Wagmi'
		const email: string = 'salviega6@gmail.com'
		const wallet: string = ARBITRUM_RECIPIENT_WALLET
		const grantAmount: number = 20
		const imageFile: string =
			'https://avatars.githubusercontent.com/u/24712956?v=4'

		if (!imageFile) {
			alert('Error: image isimageFile required')
			dispatch(setLoading(false))
			return
		}

		const frecipientSubmisionDto: FRecipientSubmitionDto = {
			anchor: profileDto.anchor,
			bio,
			email,
			fullname,
			grantAmount,
			image: imageFile,
			organization,
			wallet
		}

		const frecipientSubmission: BytesLike =
			await fRecipientSubmitionDtoToFRecipientSubmition(frecipientSubmisionDto)

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const ethereum = (window as any).ethereum

		const web3Provider: ethers.BrowserProvider = new ethers.BrowserProvider(
			ethereum
		)
		await web3Provider.send('eth_requestAccounts', [])
		const web3Signer: ethers.JsonRpcSigner = await web3Provider.getSigner()

		dispatch(
			addRecipient({
				frecipientSubmition: frecipientSubmission,
				frecipientDtoWallet: frecipientSubmisionDto.wallet,
				poolId: poolDto.id,
				providerOrSigner: web3Signer
			})
		)
	}

	useEffect(() => {
		if (!address) {
			navigate('/')
			return
		}

		if (!fetched) {
			dispatch(getProfile(address as string))
		}
	}, [address, dispatch, navigate, fetched])

	useEffect(() => {
		if (profileDto.id === '' && fetched) {
			navigate(`/profile/create`)
		}
	}, [profileDto, navigate, fetched])

	return (
		<Container>
			{loading ? (
				<div className='w-full flex justify-center'>
					<Oval
						height={50}
						width={50}
						strokeWidth={3}
						color='#f65f5b'
						secondaryColor='#f65f5b44'
					/>
				</div>
			) : (
				<section>
					<Banner imageURL={profileDto.metadata.banner} />
					<Logo logoURL={profileDto.metadata.logo} />
					<div className='mx-2'>
						<h1 className='text-xl font-bold'>{profileDto.name}</h1>
						<h2 className='text-lg text-gray-800 font-bold'>
							{profileDto.metadata.slogan}
						</h2>
						<h3 className='text-lg font-bold my-2'>Social:</h3>
						<div className='grid lg:grid-cols-profile w-full gap-4'>
							<div>
								<Social
									nonce={profileDto.nonce}
									website={profileDto.metadata.website}
									twitter={profileDto.metadata.handle}
								/>
								<Tabs defaultValue='description' className='w-full row-start-2'>
									<TabsList>
										<TabsTrigger value='description'>Description</TabsTrigger>
										<TabsTrigger value='grants'>Grants</TabsTrigger>
									</TabsList>
									<TabsContent className='p-4' value='description'>
										<p>{profileDto.metadata.description}</p>
									</TabsContent>
									<TabsContent className='p-2' value='grants'></TabsContent>
								</Tabs>
							</div>
							<Card className='hidden lg:block'>
								<CardHeader>
									<h3 className='text-lg font-bold my-2'>Members:</h3>
								</CardHeader>
								<CardContent>
									<ul className='ml-4'>
										{profileDto?.metadata?.members?.map(
											(member: string, index: number) => (
												<Member key={index} address={member} />
											)
										)}
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			)}
		</Container>
	)
}
