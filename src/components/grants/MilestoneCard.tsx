import { ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import { useAccount } from 'wagmi'

import SubmitEvidenceModal from '@/components/grants/SubmitEvidenceModal'
import { Button } from '@/components/ui/Button'
import { Status } from '@/enums/enums'
import { Milestone } from '@/models/milestone.model'
import { FProfileDto } from '@/models/profile.model'
import { AppDispatch, useAppSelector } from '@/store'
import { distributeMilestone } from '@/store/thunks/milestone.thunk'

type Props = {
	amount: string
	id: number
	milestone: Milestone
	recipientAddress: string
	poolId: string
}

export default function MilestoneCard(props: Props): JSX.Element {
	const {
		amount: amountStr,
		id,
		milestone,
		recipientAddress: recipientId,
		poolId
	} = props

	console.log('milestone', milestone.milestoneStatus)

	const { address } = useAccount()

	const profileDto: FProfileDto = useAppSelector(
		state => state.profileSlice.myProfileDto
	)

	const dispatch = useDispatch<AppDispatch>()

	const amount = parseInt(amountStr)
	const percentage = ((milestone.amountPercentage / amount) * 1000).toFixed(2)

	const onDistribute = async () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const ethereum = (window as any).ethereum

		const web3Provider: ethers.BrowserProvider = new ethers.BrowserProvider(
			ethereum
		)
		await web3Provider.send('eth_requestAccounts', [])
		const web3Signer: ethers.JsonRpcSigner = await web3Provider.getSigner()

		dispatch(
			distributeMilestone({
				recipientId,
				poolId,
				providerOrSigner: web3Signer
			})
		)
	}

	const onReject = async () => {}

	return (
		<div className='w-full border-border border-2 rounded-xl p-2 flex flex-col  gap-3 lg:flex-row'>
			<div className='grow space-y-3'>
				<div className='flex gap-2 text-muted-foreground items-center'>
					<h1 className='font-bold text-lg text-primary'>
						{milestone.metadata.title}
					</h1>
					&middot;
					<span>{percentage} %</span>
				</div>
				<p>{milestone.metadata.description}</p>
				<p className='text-muted-foreground text-sm'>
					Due date: {milestone.metadata.deadline}
				</p>
			</div>
			<div className='flex lg:flex-col items-center justify-center gap-2'>
				{milestone.milestoneStatus === Status.None ? (
					<SubmitEvidenceModal id={id} milestone={milestone} />
				) : (
					profileDto.owner === address &&
					milestone.milestoneStatus !== Status.Accepted && (
						<>
							<Button
								className='w-full'
								variant={'success'}
								onClick={onDistribute}
							>
								DISTRIBUTE MILESTONE
							</Button>
							<Button className='w-full' variant={'outline'} onClick={onReject}>
								REJECT MILESTONE
							</Button>
						</>
					)
				)}
			</div>
		</div>
	)
}
