import { useState } from 'react'
import { useForm } from 'react-hook-form'
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
	setFormValues
}: createPoolProps): JSX.Element {
	const [file, setFile] = useState<ImageFile>({ image: null })
	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			name: '',
			amount: '',
			image: '',
			tags: '',
			organizer: '',
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

	const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const file = URL.createObjectURL(e.target.files[0])
			handleChange(e.target.name, file)
			setFile({ image: e.target.files[0] })
		}
	}

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			// TODO: uncomment this to submit image
			// const image: File = file.image as File
			console.log('Form data:', data)
		} catch (error) {
			console.error('Submission error:', error)
		}
	}

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
										<Input {...field} value={'ReFi Bogota'} disabled />
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
