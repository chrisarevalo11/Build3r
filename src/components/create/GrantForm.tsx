import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as z from 'zod'

import { Button } from '@/components/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
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
import { Textarea } from '@/components/ui/textarea'
import {
	ARBITRUM_INIT_STRATEGY_BYTES,
	ARBITRUM_NATIVE
} from '@/constants/constans'
import { fPoolSubmitionDtoToFPoolSubmition } from '@/functions/dtos/pool.dtos'
import { FPoolSubmition, FPoolSubmitionDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { setLoading } from '@/store/slides/uiSlice'
import { createPool } from '@/store/thunks/pool.thunk'
import { createPoolProps } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'

type ImageFile = {
	image: File | null
}

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.'
	}),
	amount: z.string().min(0, {
		message: 'Amount is required'
	}),
	image: z.string().min(1, {
		message: 'Logo is required'
	}),
	tags: z.string().refine(
		value => {
			const regex = /^(\w+(,\s*\w+)*)?$/
			const tagsArray = value.split(',').map(tag => tag.trim())
			return regex.test(value) && tagsArray.length <= 5
		},
		{
			message: 'Tags must be word(s) separated by commas and max. 5 tags'
		}
	),
	organizer: z.string(),
	description: z
		.string()
		.min(2, {
			message: 'Description is required'
		})
		.max(200, {
			message: 'Description must be less than 200 characters'
		})
})

export default function GrantForm({
	setFormValues,
	profileName
}: createPoolProps): JSX.Element {
	// TODO: use this file variable to submit image
	const [file, setFile] = useState<ImageFile>({ image: null })

	const dispatch = useDispatch<AppDispatch>()
	const loading = useAppSelector(state => state.uiSlice.loading)

	const profileDto: FProfileDto = useAppSelector(
		state => state.profileSlice.profileDto
	)

	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			name: '',
			amount: '',
			image: '',
			tags: '',
			organizer: profileName,
			description: ''
		},
		resolver: zodResolver(formSchema)
	})

	const handleChange = (name: string, value: string | string[]) => {
		setFormValues(prev => ({
			...prev,
			[name]: value
		}))
	}

	const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const file = URL.createObjectURL(e.target.files[0])
			handleChange(e.target.name, file)
			setFile({ image: e.target.files[0] })
		}
	}

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			dispatch(setLoading(true))

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const ethereum = (window as any).ethereum

			const web3Provider: ethers.BrowserProvider = new ethers.BrowserProvider(
				ethereum
			)
			await web3Provider.send('eth_requestAccounts', [])
			const web3Signer: ethers.JsonRpcSigner = await web3Provider.getSigner()

			const amount: number = Number(data.amount)
			const tags: string[] = data.tags
				.split(',')
				.map((tag: string) => tag.trim())

			const fPoolSubmitionDto: FPoolSubmitionDto = {
				profileId: profileDto.id,
				strategy: '0x3C4481CcF0DFf82dA5660bD7A69f84D32eeA2d61',
				initStrategyData: ARBITRUM_INIT_STRATEGY_BYTES,
				native: ARBITRUM_NATIVE,
				amount,
				description: data.description,
				image: file.image as File,
				name: data.name,
				tags,
				managers: profileDto.metadata.members
			}

			const fPoolSubmition: FPoolSubmition =
				await fPoolSubmitionDtoToFPoolSubmition(fPoolSubmitionDto)

			dispatch(createPool({ fPoolSubmition, providerOrSigner: web3Signer }))
		} catch (error) {
			console.error('Submission error:', error)
			alert('Submission error')
		}
	}

	useEffect(() => {
		handleChange('organizer', profileName)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Card>
			<CardHeader>
				<CardTitle>Create a grant</CardTitle>
				<CardDescription>Specify every detail of your grant</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder='My grant'
											{...field}
											onChange={e => {
												field.onChange(e)
												handleChange(e.target.name, e.target.value)
											}}
										/>
									</FormControl>
									<FormMessage>
										{form.formState.errors.name?.message}
									</FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='amount'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Amount (ETH)</FormLabel>
									<FormControl>
										<Input
											type='number'
											placeholder='20'
											{...field}
											onChange={e => {
												field.onChange(e)
												handleChange(e.target.name, e.target.value)
											}}
										/>
									</FormControl>
									<FormMessage>
										{form.formState.errors.amount?.message}
									</FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='image'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Image</FormLabel>
									<FormControl>
										<Input
											className='cursor-pointer'
											type='file'
											{...field}
											accept='image/*'
											onChange={e => {
												field.onChange(e)
												onImageChange(e)
											}}
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
							name='organizer'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Organizer</FormLabel>
									<FormControl>
										<Input {...field} value={profileName} disabled />
									</FormControl>
									<FormMessage>
										{form.formState.errors.organizer?.message}
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
											placeholder='This is a grant oriented to...'
											{...field}
											onChange={e => {
												field.onChange(e)
												handleChange(e.target.name, e.target.value)
											}}
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
							name='tags'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tags</FormLabel>
									<FormControl>
										<Textarea
											placeholder='ReFi, Evironment, etc...'
											{...field}
											onChange={e => {
												field.onChange(e)
												handleChange(e.target.name, e.target.value.split(','))
											}}
										/>
									</FormControl>
									<FormMessage>
										{form.formState.errors.tags?.message}
									</FormMessage>
								</FormItem>
							)}
						/>
						<CardFooter className='flex justify-center'>
							<Button
								type='submit'
								className={`min-w-[80px] ${loading && 'pointer-events-none'}}`}
							>
								{loading ? <Loader type='white' /> : 'Submit'}
							</Button>
						</CardFooter>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
