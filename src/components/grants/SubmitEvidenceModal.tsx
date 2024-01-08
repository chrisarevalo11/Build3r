import { useAccount } from 'wagmi'

import SubmitEvidenceForm from '@/components/grants/SubmitEvidenceForm'
import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Milestone } from '@/models/milestone.model'
import { Recipient } from '@/models/recipient.model'
import { useAppSelector } from '@/store'

type Props = {
	id: number
	milestone: Milestone
}

export default function SubmitEvidenceModal(props: Props): JSX.Element {
	const { id, milestone } = props

	const { address } = useAccount()

	const recipient: Recipient = useAppSelector(
		state => state.recipientSlice.recipient
	)

	return (
		<Dialog>
			<DialogTrigger asChild>
				{recipient.recipientAddress === address && (
					<Button>Submit Evidence</Button>
				)}
			</DialogTrigger>
			<DialogContent>
				<div>
					<h1 className='text-xl font-bold text-primary'>Submit Evidence</h1>
					<p>
						Please submit images, links and files that support the evidence of{' '}
						{milestone.metadata.title}
					</p>
				</div>
				<SubmitEvidenceForm id={id} milestone={milestone} />
			</DialogContent>
		</Dialog>
	)
}
