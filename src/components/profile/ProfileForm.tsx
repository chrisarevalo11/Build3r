import { useRef } from 'react'
import { ethers } from 'ethers'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useAccount } from 'wagmi'
import * as z from 'zod'

import { Button } from '@/components/ui/Button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
	ARBITRUM_SEPOLIA_RPC_URL,
	ETHEREUM_ADDRESSES_REGEX
} from '@/constants/constans'
import { fProfileSubmitionDtoToFProfileSubmition } from '@/functions/dtos'
import { FProfileSubmition, FProfileSubmitionDto } from '@/models/profile.model'
import { AppDispatch } from '@/store'
import { setLoading } from '@/store/slides/uiSlice'
import { createProfile } from '@/store/thunks/profile.thunk'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.'
	}),
	banner: z.string().min(1, {
		message: 'Banner is required'
	}),
	logo: z.string().min(1, {
		message: 'Logo is required'
	}),
	slogan: z.string().min(2, {
		message: 'Slogan is required'
	}),
	website: z.string().url({
		message: 'Invalid URL format for the website.'
	}),
	twitter: z.string().min(2, {
		message: 'Twitter handle is required'
	}),
	description: z
		.string()
		.min(2, {
			message: 'Description is required'
		})
		.max(283, {
			message: 'Description must be less than 200 characters'
		}),
	members: z.string().refine(value => ETHEREUM_ADDRESSES_REGEX.test(value), {
		message: 'Must be a valid Ethereum wallet or wallets separated by commas.'
	})
})

export default function ProfileForm(): JSX.Element {
	const bannerRef = useRef<HTMLInputElement>(null)
	const logoRef = useRef<HTMLInputElement>(null)
	const dispatch = useDispatch<AppDispatch>()

	const { address } = useAccount()

	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			name: '',
			banner: '',
			logo: '',
			slogan: '',
			website: '',
			twitter: '',
			description: '',
			members: ''
		},
		resolver: zodResolver(formSchema)
	})

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			dispatch(setLoading(true))

			const bannerFile = bannerRef.current?.files?.[0]
			const logoFile = logoRef.current?.files?.[0]

			if (!bannerFile || !logoFile) {
				console.error('Archivo de banner o logo no seleccionado')
				return
			}

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const ethereum = (window as any).ethereum

			const web3Provider: ethers.BrowserProvider = new ethers.BrowserProvider(
				ethereum
			)
			await web3Provider.send('eth_requestAccounts', [])
			const web3Signer: ethers.JsonRpcSigner = await web3Provider.getSigner()

			const nonce: number = await ethers
				.getDefaultProvider(ARBITRUM_SEPOLIA_RPC_URL)
				.getTransactionCount(address as string)

			const membersArray: string[] = data.members
				.split(',')
				.map((member: string) => member.trim())

			const fProfileSubmitionDto: FProfileSubmitionDto = {
				owner: address as string,
				nonce,
				name: data.name,
				banner: bannerFile,
				logo: logoFile,
				slogan: data.slogan,
				website: data.website,
				twitter: data.twitter,
				description: data.description,
				members: membersArray
			}

			const fProfileSubmition: FProfileSubmition =
				await fProfileSubmitionDtoToFProfileSubmition(fProfileSubmitionDto)

			dispatch(
				createProfile({ fProfileSubmition, providerOrSigner: web3Signer })
			)
		} catch (error) {
			console.error('❌ ', error)
			alert('Error: look at the console')
		}
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 mx-5'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder='My organization' {...field} />
							</FormControl>
							<FormMessage>{form.formState.errors.name?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<div className='flex flex-col md:flex-row md:gap-3'>
					<FormField
						control={form.control}
						name='banner'
						render={({ field }) => (
							<FormItem className='grow'>
								<FormLabel>Banner</FormLabel>
									<Input className='cursor-pointer' type='file' {...field} ref={bannerRef} />
								<FormControl>
								</FormControl>
								<FormMessage>
									{form.formState.errors.banner?.message}
								</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='logo'
						render={({ field }) => (
							<FormItem className='grow'>
								<FormLabel>Logo</FormLabel>
								<FormControl>
									<Input className='cursor-pointer' type='file' {...field}  ref={logoRef}/>
								</FormControl>
								<FormMessage>{form.formState.errors.logo?.message}</FormMessage>
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name='slogan'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Slogan</FormLabel>
							<FormControl>
								<Input placeholder='Think Different' {...field} />
							</FormControl>
							<FormMessage>{form.formState.errors.slogan?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='website'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Website/linktree</FormLabel>
							<FormControl>
								<Input placeholder='https://www.mywebsite.org' {...field} />
							</FormControl>
							<FormMessage>
								{form.formState.errors.website?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='twitter'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Twitter handle</FormLabel>
							<FormControl>
								<Input placeholder='johndoe123' {...field} />
							</FormControl>
							<FormMessage>
								{form.formState.errors.twitter?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder='My organization is focused on...'
									{...field}
								/>
							</FormControl>
							<FormMessage>
								{form.formState.errors.description?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='members'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Members (wallets)</FormLabel>
							<FormControl>
								<Textarea placeholder='0x1234..., 0x5678...' {...field} />
							</FormControl>
							<FormMessage>
								{form.formState.errors.members?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				<div className='flex justify-center'>
					<Button className='m-2' type='submit'>
						Submit
					</Button>
				</div>
			</form>
		</Form>
	)
}
