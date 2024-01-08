import SubmitEvidenceForm from '@/components/grants/SubmitEvidenceForm'
import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Milestone } from '@/models/milestone.model'

type Props = {
	milestone: Milestone
}

export default function SubmitEvidenceModal(props: Props): JSX.Element {
	const { milestone } = props

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Submit Evidence</Button>
			</DialogTrigger>
			<DialogContent>
				<div>
					<h1 className='text-xl font-bold text-primary'>Submit Evidence</h1>
					<p>Please submit evidence of {milestone.metadata.title}</p>
				</div>
				<SubmitEvidenceForm milestone={milestone} />
			</DialogContent>
		</Dialog>
	)
}
