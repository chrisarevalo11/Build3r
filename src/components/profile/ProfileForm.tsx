import { ethers } from 'ethers'
import { useForm } from 'react-hook-form'
import { useAccount } from 'wagmi'
import * as z from 'zod'

import { Button } from '@/components/ui/Button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ARBITRUM_SEPOLIA_RPC_URL } from '@/constants/constans'

import { Textarea } from '../ui/textarea'

const formSchema = z.object({
	members: z.array(z.string().min(42, { message: 'Invalid address' })),
	organizationName: z.string().max(60, {
		message: 'Organization name must be less than 60 characters'
	})
})

export default function ProfileForm(): JSX.Element {
	const { address } = useAccount()

	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			organizationName: '',
			members: []
		}
	})

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			const nonce: number = await ethers
				.getDefaultProvider(ARBITRUM_SEPOLIA_RPC_URL)
				.getTransactionCount(address as string)

			console.log('nonce:', nonce)

			// Perform any necessary actions with the form data
			console.log('Form data:', data)
		} catch (error) {
			// Handle submission errors
			console.error('Submission error:', error)
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='organizationName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Organization</FormLabel>
							<FormDescription>
								Write the name of your organization.
							</FormDescription>
							<FormControl>
								<Input placeholder='shadcn' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='members'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Members</FormLabel>
							<FormDescription>
								Members of your organization. Write the address of the members
							</FormDescription>
							<FormControl>
								<Textarea
									placeholder='shadcn'
									{...field}
									name='contributors'
									required
								></Textarea>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	)
}
