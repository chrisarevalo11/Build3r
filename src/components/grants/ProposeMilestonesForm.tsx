import { useForm } from 'react-hook-form'
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
import { Textarea } from '@/components/ui/textarea'
import { useAppSelector } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
	name1: z.string().min(1, {
		message: 'Milestone name is required'
	}),
	name2: z.string().min(1, {
		message: 'Milestone name is required'
	}),
	description1: z.string().min(1, {
		message: 'Milestone description is required'
	}),
	description2: z.string().min(1, {
		message: 'Milestone description is required'
	}),
	date1: z.string().min(1, {
		message: 'Deadline is required'
	}),
	date2: z.string().min(1, {
		message: 'Deadline is required'
	}),
	amount1: z.string().optional(),
	amount2: z.string().optional()
})

type Props = {
	amount: string
}

export default function ProposeMilestonesForm(props: Props): JSX.Element {
	const { amount } = props
	const loading = useAppSelector(state => state.uiSlice.loading)
	const milestoneAmount: number = parseInt(amount) / 2

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name1: '',
			name2: '',
			description1: '',
			description2: '',
			date1: '',
			date2: '',
			amount1: '' + milestoneAmount,
			amount2: '' + milestoneAmount
		}
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const { name1, name2, description1, description2, date1, date2 } = values
		console.log([
			{ name1, description1, date1, amount1: milestoneAmount },
			{ name2, description2, date2, amount2: milestoneAmount }
		])
	}

	return (
		<div>
			<h1 className='text-xl text-center font-bold text-primary mb-2'>
				Milestones proposal
			</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='max-h-[60vh] overflow-y-scroll no-scrollbar'>
						<div className='space-y-1 max-h-[60vh] overflow-y-scroll no-scrollbar'>
							<h1 className='text-lg font-bold text-primary/90'>Milestone 1</h1>
							<FormField
								control={form.control}
								name='name1'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												placeholder='Construction of the building'
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{form.formState.errors.name1?.message}
										</FormMessage>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='description1'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder='In this milestone we plan to...'
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{form.formState.errors.description1?.message}
										</FormMessage>
									</FormItem>
								)}
							/>
							<div className='md:grid md:grid-cols-2 gap-x-4'>
								<FormField
									control={form.control}
									name='date1'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Deadline</FormLabel>
											<FormControl>
												<Input type='date' {...field} />
											</FormControl>
											<FormMessage>
												{form.formState.errors.date1?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='amount1'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Amount (ETH)</FormLabel>
											<FormControl>
												<Input {...field} value={milestoneAmount} disabled />
											</FormControl>
											<FormMessage>
												{form.formState.errors.amount1?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
							</div>
						</div>

						<div className='space-y-1 mt-2'>
							<h1 className='text-lg font-bold text-primary/90'>Milestone 2</h1>
							<FormField
								control={form.control}
								name='name2'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												placeholder='Culmination of the building'
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{form.formState.errors.name2?.message}
										</FormMessage>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='description2'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder='At this point the building...'
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{form.formState.errors.description2?.message}
										</FormMessage>
									</FormItem>
								)}
							/>
							<div className='md:grid md:grid-cols-2 gap-x-4'>
								<FormField
									control={form.control}
									name='date2'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Deadline</FormLabel>
											<FormControl>
												<Input type='date' {...field} />
											</FormControl>
											<FormMessage>
												{form.formState.errors.date2?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='amount2'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Amount (ETH)</FormLabel>
											<FormControl>
												<Input {...field} value={milestoneAmount} disabled />
											</FormControl>
											<FormMessage>
												{form.formState.errors.amount2?.message}
											</FormMessage>
										</FormItem>
									)}
								/>
							</div>
						</div>
					</div>
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
