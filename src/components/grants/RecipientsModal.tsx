import RecipientSteps from '@/components/grants/RecipientsSteps'
import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { ArrowRightIcon } from '@radix-ui/react-icons'

type Props = {
	poolDto: FPoolDto
	profileDto: FProfileDto
}

export default function RecipientsModal(props: Props): JSX.Element {
	const { poolDto, profileDto } = props

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='self-end group' variant={'secondary'}>
					Continue <ArrowRightIcon className='ml-2 h-4 w-4' />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<RecipientSteps poolDto={poolDto} profileDto={profileDto} />
			</DialogContent>
		</Dialog>
	)
}
