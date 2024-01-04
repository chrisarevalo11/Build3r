import { BytesLike, ethers } from 'ethers'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
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
import { ARBITRUM_RECIPIENT_WALLET } from '@/constants/constans'
import { fRecipientSubmitionDtoToFRecipientSubmition } from '@/functions/dtos/recipient.dtos'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { FRecipientSubmitionDto } from '@/models/recipient.model'
import { AppDispatch } from '@/store'
import { setLoading } from '@/store/slides/uiSlice'
import { addRecipient } from '@/store/thunks/recipient.thunk'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
	poolDto: FPoolDto
	profileDto: FProfileDto
	setStep: () => void
	amount: string
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
	}),
	grantAmount: z.number().min(0.00001, {
		message: 'Amount is required'
	})
})

export default function RegisterRecipientForm(props: Props): JSX.Element {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { poolDto, profileDto, setStep, amount } = props
	const dispatch = useDispatch<AppDispatch>()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: '',
			bio: '',
			organization: '',
			email: '',
			image: '',
			grantAmount: parseInt(amount)
		}
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		setStep()
		console.log(values)
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
									/>
								</FormControl>
								<FormMessage>
									{form.formState.errors.image?.message}
								</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='grantAmount'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Amount granted (ETH)</FormLabel>
								<FormControl className='w-[100px]'>
									<Input
										placeholder='0'
										type='number'
										{...field}
										defaultValue={amount}
										max={amount}
										min={0}
									/>
								</FormControl>
								<FormMessage>
									{form.formState.errors.email?.message}
								</FormMessage>
							</FormItem>
						)}
					/>
					<DialogFooter>
						<Button className='mt-2' type='submit'>
							Register
						</Button>
					</DialogFooter>
				</form>
			</Form>
		</div>
	)
}
