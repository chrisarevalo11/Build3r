import { useState } from 'react'

import RegisterRecipientForm from '@/components/grants/RegisterRecipientForm'
import { Button } from '@/components/ui/Button'
import { DialogFooter } from '@/components/ui/dialog'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { FRecipientSubmitionDto } from '@/models/recipient.model'

type Props = {
	poolDto: FPoolDto
	profileDto: FProfileDto
}
export default function RecipientSteps(props: Props) {
	const { poolDto, profileDto } = props
	const [steps, setStep] = useState({
		stepsCount: [0, 1, 2],
		currentStep: 0
	})

	const handleNextStep = () => {
		setStep({
			...steps,
			currentStep: steps.currentStep + 1
		})
	}

	const stepContent: JSX.Element[] = [
		<RegisterRecipientForm
			amount={poolDto.amount}
			key={0}
			poolDto={poolDto}
			profileDto={profileDto}
			setStep={handleNextStep}
		/>,
		// <RegisterRecipients key={1} recipient={poolDto.recipients[0]} />,
		<h1 key={2}></h1>
	]

	return (
		<>
			<div className='w-[95%] mx-auto px-4 sm:px-0 mt-4'>
				<ul aria-label='Steps' className='flex items-center'>
					{steps.stepsCount.map((item, index) => (
						<li
							key={index}
							aria-current={steps.currentStep === index ? 'step' : false}
							className='flex-1 last:flex-none flex items-center'
						>
							<div className='flex flex-col items-center'>
								<div
									className={`size-6 rounded-full border-2 flex-none flex items-center justify-center ${
										steps.currentStep > index
											? 'bg-primary border-primary'
											: '' || steps.currentStep === index
												? 'border-primary'
												: ''
									}`}
								>
									<span
										className={`size-2 rounded-full bg-primary ${
											steps.currentStep !== index ? 'hidden' : ''
										}`}
									></span>
									{steps.currentStep > index ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='size-4 text-white'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4.5 12.75l6 6 9-13.5'
											/>
										</svg>
									) : (
										''
									)}
								</div>
							</div>
							<hr
								className={`w-[90%] mx-auto border ${
									index === steps.stepsCount.length - 1
										? 'hidden'
										: '' || steps.currentStep > index
											? 'border-primary'
											: ''
								}`}
							/>
						</li>
					))}
				</ul>
			</div>
			<div className='mt-4'>{stepContent[steps.currentStep]}</div>
		</>
	)
}

type RegisterRecipientsProps = {
	recipient: FRecipientSubmitionDto
	// setStep: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AuthorizeRecipient(props: RegisterRecipientsProps): JSX.Element {
	const { recipient } = props
	const { fullname, email, organization, bio } = recipient

	const handleRegister = () => {
		console.log('register')
	}

	return (
		<div>
			<h1 className='text-xl font-bold text-primary mb-2'>
				Register Recipients
			</h1>
			<div className='w-full border-border border-2 rounded-xl p-1 flex flex-col'>
				<h2>
					{fullname} - {email}
				</h2>
				<p>{organization}</p>
				<p>{bio}</p>
			</div>
			<DialogFooter>
				<Button className='mt-2' onClick={() => handleRegister}>
					Authorize
				</Button>
			</DialogFooter>
		</div>
	)
}
