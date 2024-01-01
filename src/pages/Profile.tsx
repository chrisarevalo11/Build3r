import { useEffect } from 'react'
import { BytesLike, ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import CreateProfile from '@/components/profile/CreateProfile'
import { Container } from '@/components/ui/container'
import { ARBITRUM_RECIPIENT_WALLET } from '@/constants/constans'
import { fRecipientSubmitionDtoToFRecipientSubmition } from '@/functions/dtos/recipient.dtos'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { FRecipientSubmitionDto } from '@/models/recipient.model'
import { AppDispatch, useAppSelector } from '@/store'
import { setLoading } from '@/store/slides/uiSlice'
import { getProfile } from '@/store/thunks/profile.thunk'
import { addRecipient } from '@/store/thunks/recipient.thunk'

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
	}, [address, fetched, dispatch, navigate])

	return (
		<Container className='flex flex-col gap-10 md:gap-4'>
			{loading ? (
				'loading...'
			) : profileDto.id === '' ? (
				<>
					<CreateProfile />
				</>
			) : (
				<>
					<p>{profileDto.name}</p>
					<p>{profileDto.metadata.handle}</p>
					<p>{poolsDto.map(pool => pool.metadata.name).join(', ')}</p>
					<button onClick={onAddRecipient}>CLick</button>
				</>
			)}
		</Container>
	)
}
