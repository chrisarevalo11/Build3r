import { useRef } from 'react'
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
import { Textarea } from '@/components/ui/textarea'
import {
	ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY,
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

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Grant name must be at least 2 characters.'
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
			return regex.test(value)
		},
		{
			message: 'Tags must be word(s) separated by commas'
		}
	),
	description: z
		.string()
		.min(2, {
			message: 'Description is required'
		})
		.max(200, {
			message: 'Description must be less than 200 characters'
		})
})

export default function ProjectForm({
	setFormValues
}: createPoolProps): JSX.Element {
	const imageRef: React.RefObject<HTMLInputElement> =
		useRef<HTMLInputElement>(null)

	const dispatch = useDispatch<AppDispatch>()

	const profileDto: FProfileDto = useAppSelector(
		state => state.profileSlice.profileDto
	)

	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			name: '',
			amount: '',
			image: '',
			tags: '',
			description: ''
		},
		resolver: zodResolver(formSchema)
	})

	const handleChange = (name: string, value: string) => {
		setFormValues(prev => ({
			...prev,
			[name]: value
		}))
	}

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			dispatch(setLoading(true))

			const imageFile = imageRef.current?.files?.[0]

			if (!imageFile) {
				alert('Error: banner and logo are required')
				dispatch(setLoading(false))
				return
			}

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
				strategy: ARBITRUM_DIRECT_GRANTS_SIMPLE_STRATEGY,
				initStrategyData: ARBITRUM_INIT_STRATEGY_BYTES,
				native: ARBITRUM_NATIVE,
				amount,
				description: data.description,
				image: imageFile,
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

	return (
		<Card className='card w-[95%] md:w-[90%] lg:w-1/2 shadow-xl m-2'>
			{profileDto.id}
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
											onChange={e => {
												field.onChange(e)
												const file = e.target.files?.length
													? URL.createObjectURL(e.target.files[0])
													: ''
												handleChange(e.target.name, file)
											}}
											ref={imageRef}
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
							name='description'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Brief description</FormLabel>
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
												handleChange(e.target.name, e.target.value)
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
							<Button type='submit'>Submit</Button>
						</CardFooter>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

// function createProjectArgsDtoToCreateProjectArgs(
// 	formValues: FormValuesTypes
// ): any[] {
// 	const {
// 		projectName,
// 		bannerImage,
// 		logo,
// 		description,
// 		link,
// 		amount,
// 		startDate,
// 		endDate,
// 		scopeTags,
// 		contributors
// 	} = formValues

// 	const amountBN: bigint = toDecimal(amount)
// 	const projectStartTime: number = new Date(startDate).getTime() / 1000
// 	const projectEndTime: number = new Date(endDate).getTime() / 1000
// 	const projectTime: number[] = [projectStartTime, projectEndTime]
// 	// TODO: Change this to the real evaluation time
// 	const evaluationTime: number = new Date('2024-01-01').getTime() / 1000
// 	const info: string = `${projectName},${bannerImage},${logo},${description},${link},${scopeTags},${contributors}`

// 	const args: any[] = [
// 		amountBN, // _amount
// 		projectStartTime, // _planning
// 		projectTime, // _projectTime
// 		evaluationTime, // _evaluationTime
// 		info // _info
// 	]

// 	return args
// }
