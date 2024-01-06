import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import GrantBanner from '@/components/grants/GrantBanner'
import GrantDescription from '@/components/grants/GrantDescription'
import GrantHeader from '@/components/grants/GrantHeader'
import GrantTags from '@/components/grants/GrantTags'
import RecipientsModal from '@/components/grants/RecipientsModal'
import { Status } from '@/enums/enums'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { Recipient } from '@/models/recipient.model'
import { AppDispatch, useAppSelector } from '@/store'
import { getRecipient } from '@/store/thunks/recipient.thunk'
import { CheckIcon } from '@radix-ui/react-icons'

import ProposeMilestonesModal from './ProposeMilestonesModal'

type Props = {
	poolDto: FPoolDto
}

export default function GrantPage(props: Props): JSX.Element {
	const { poolDto } = props

	const { address } = useAccount()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const recipientStatusEnum: typeof Status = Status

	const profileDto: FProfileDto = useAppSelector(
		state => state.profileSlice.profileDto
	)

	const recipient: Recipient = useAppSelector(
		state => state.recipientSlice.recipient
	)
	const fetched: boolean = useAppSelector(
		state => state.recipientSlice.recipientFetched
	)

	const { name: profileName } = profileDto
	const { logo } = profileDto.metadata

	const { amount } = poolDto
	const { name, description, image, tags } = poolDto.metadata

	useEffect(() => {
		if (!address) {
			navigate('/')
		}

		if (!fetched) {
			dispatch(getRecipient({ profileId: profileDto.anchor }))
		}
	}, [address, fetched, dispatch, navigate, profileDto])

	return (
		<section className='w-full flex flex-col items-center border-2 border-input rounded-xl p-2 md:px-6'>
			<GrantBanner logo={logo} banner={image} />
			<GrantHeader name={name} amount={amount} profileName={profileName} />
			<div className='flex w-full flex-col md:flex-row my-5 gap-4'>
				<GrantDescription description={description} />
				<GrantTags tags={tags} />
			</div>
			<div className='grid w-full justify-items-center md:grid-cols-2 my-5 gap-4'>
				<StepCard
					completed={recipientStatusEnum.InReview === recipient.recipientStatus}
				>
					<h3 className='font-bold text-lg'>
						1. Set the recipients and allocate funds
					</h3>
					<p className='text-white/80'>
						Set the recipient address (a multisig or a wallet), register them
						and allocate due funds.
					</p>
					<RecipientsModal poolDto={poolDto} profileDto={profileDto} />
				</StepCard>
				<StepCard>
					<h3 className='font-bold text-lg'>
						2. Propose a milestone strategy (recipients)
					</h3>
					<p className='text-white/80'>
						Set a milestone strategy with name, description and deadline for the
						onwers to review it and approve or reject it.
					</p>
					<ProposeMilestonesModal amount={amount} />
				</StepCard>
			</div>
		</section>
	)
}

type StepCardProps = {
	disabled?: boolean
	completed?: boolean
	children: React.ReactNode
}

function StepCard(props: StepCardProps): JSX.Element {
	const { children, disabled, completed } = props

	return (
		<div className='relative'>
			{completed && (
				<div className='rounded-full bg-primary z-10 text-white shadow-xl p-1 absolute -top-2 -right-2'>
					<CheckIcon />
				</div>
			)}
			<div
				className={`w-full bg-primary text-white/90 rounded-xl p-2 md:p-4 space-y-2 flex flex-col relative
			${disabled && 'opacity-60 pointer-events-none'}
			${completed && 'opacity-80 pointer-events-none'}
			`}
			>
				{children}
			</div>
		</div>
	)
}
