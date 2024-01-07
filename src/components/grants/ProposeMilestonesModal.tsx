import ProposeMilestonesForm from '@/components/grants/ProposeMilestonesForm'
import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Status } from '@/enums/enums'
import { Recipient } from '@/models/recipient.model'
import { useAppSelector } from '@/store'
import { ArrowRightIcon } from '@radix-ui/react-icons'

type Props = {
	amount: string
}
export default function ProposeMilestonesModal(props: Props): JSX.Element {
	const { amount } = props
	const grantee: Recipient = useAppSelector(
		state => state.recipientSlice.grantee
	)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='self-end group' variant={'secondary'}>
					Continue{' '}
					<ArrowRightIcon className='ml-2 h-4 w-4 group-hover:translate-x-1 transition' />
				</Button>
			</DialogTrigger>
			{grantee.milestonesReviewStatus !== Status.Accepted && (
				<DialogContent>
					<ProposeMilestonesForm amount={amount} />
				</DialogContent>
			)}
		</Dialog>
	)
}
