import { ChangeEvent } from 'react'
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

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Grant name must be at least 2 characters.'
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
		.max(200, {
			message: 'Description must be less than 200 characters'
		})
})

export default function ProjectForm({
	setFormValues
}: createPoolProps): JSX.Element {
	// const [isLoading, setIsLoading] = useState<boolean>(false)
	// const navigate = useNavigate()

	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			name: '',
			banner: '',
			logo: '',
			slogan: '',
			website: '',
			twitter: '',
			description: ''
		},
		resolver: zodResolver(formSchema)
	})

	const handleChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value }: { name: string; value: string } = event.target

		setFormValues(prev => ({
			...prev,
			[name]: value
		}))
	}

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			console.log('Form data:', data)
		} catch (error) {
			console.error('Submission error:', error)
		}
	}

	return (
		<Card className='card w-[95%] md:w-[90%] lg:w-1/2 shadow-xl m-2'>
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>Deploy your new project in one-click.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Grant name</FormLabel>
									<FormControl>
										<Input
											onChange={handleChange}
											placeholder='My organization'
											{...field}
										/>
									</FormControl>
									<FormMessage>
										{form.formState.errors.name?.message}
									</FormMessage>
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
										<FormControl>
											<Input id='banner' type='file' {...field} />
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
											<Input id='logo' type='file' {...field} />
										</FormControl>
										<FormMessage>
											{form.formState.errors.logo?.message}
										</FormMessage>
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
									<FormMessage>
										{form.formState.errors.slogan?.message}
									</FormMessage>
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
										<Input
											type='url'
											placeholder='https://www.mywebsite.org'
											{...field}
										/>
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
