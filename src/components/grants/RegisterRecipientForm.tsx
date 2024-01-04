import { useState } from 'react'
import { BytesLike, ethers } from 'ethers'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useAccount } from 'wagmi'
import * as z from 'zod'

import { Button } from '@/components/ui/Button'
import { DialogFooter } from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Loader from '@/components/ui/Loader'
import { ARBITRUM_RECIPIENT_WALLET } from '@/constants/constans'
import { fRecipientSubmitionDtoToFRecipientSubmition } from '@/functions/dtos/recipient.dtos'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { FRecipientSubmitionDto } from '@/models/recipient.model'
import { AppDispatch, useAppSelector } from '@/store'
import { setLoading } from '@/store/slides/uiSlice'
import { addRecipient } from '@/store/thunks/recipient.thunk'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
	amount: string
	poolDto: FPoolDto
	profileDto: FProfileDto
}

const formSchema = z.object({
	fullName: z.string().min(1, {
		message: 'Name is required'
	}),
	bio: z.string().min(1, {
		message: 'Bio is required'
	}),
	organization: z.string().min(1, {
		message: 'Organization is required'
	}),
	email: z.string().email({
		message: 'Invalid email format'
	}),
	image: z.string().min(1, {
		message: 'image is required'
	})
})

interface InitialState {
	image: null | File
}

export default function RegisterRecipientForm(props: Props): JSX.Element {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { poolDto, profileDto, amount } = props

	const initialState = {
		image: null
	}
	const [files, setFiles] = useState<InitialState>(initialState)

	const { address } = useAccount()
	const loading = useAppSelector(state => state.uiSlice.loading)
	const dispatch = useDispatch<AppDispatch>()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: '',
			bio: '',
			organization: '',
			email: '',
			image: ''
		}
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		dispatch(setLoading(true))
		const fullname: string = values.fullName
		const bio: string = values.bio
		const organization = values.organization
		const email: string = values.email
		const wallet: string = ARBITRUM_RECIPIENT_WALLET
		const grantAmount: number = parseInt(amount)
		const imageFile: File | null = files.image

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
				grantAmount,
				address: address as string,
				frecipientSubmition: frecipientSubmission,
				frecipientDtoWallet: frecipientSubmisionDto.wallet,
				poolId: poolDto.id,
				providerOrSigner: web3Signer
			})
		)
	}

	return (
		<div>
			<h1 className='text-xl font-bold text-primary mb-2'>
				Register recipient
			</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-1'>
					<FormField
						control={form.control}
						name='fullName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<Input placeholder='John Doe' {...field} />
								</FormControl>
								<FormMessage>
									{form.formState.errors.fullName?.message}
								</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='bio'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Bio</FormLabel>
								<FormControl>
									<Input
										placeholder='I am a software developer that...'
										{...field}
									/>
								</FormControl>
								<FormMessage>{form.formState.errors.bio?.message}</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='organization'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Organization</FormLabel>
								<FormControl>
									<Input placeholder='My org' {...field} />
								</FormControl>
								<FormMessage>
									{form.formState.errors.organization?.message}
								</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder='yourname@example.com' {...field} />
								</FormControl>
								<FormMessage>
									{form.formState.errors.email?.message}
								</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='image'
						render={({ field }) => (
							<FormItem className='grow'>
								<FormLabel>image</FormLabel>
								<FormControl>
									<Input
										className='cursor-pointer'
										type='file'
										accept='image/*'
										{...field}
										onChange={e => {
											field.onChange(e)
											if (e.target.files && e.target.files.length > 0) {
												setFiles({ image: e.target.files![0] })
											}
										}}
									/>
								</FormControl>
								<FormMessage>
									{form.formState.errors.image?.message}
								</FormMessage>
							</FormItem>
						)}
					/>
					<DialogFooter>
						<Button className='mt-2' type='submit'>
							{loading ? <Loader type='white' /> : 'Register'}
						</Button>
					</DialogFooter>
				</form>
			</Form>
		</div>
	)
}
