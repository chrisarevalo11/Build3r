import RegisterRecipientForm from '@/components/grants/RegisterRecipientForm'
import { Button } from '@/components/ui/Button'
import { DialogFooter } from '@/components/ui/dialog'
import { FPoolDto } from '@/models/pool.model'
import { FProfileDto } from '@/models/profile.model'
import { Steps } from '@/models/ui/steps.model'
import { useAppSelector } from '@/store'

type Props = {
	poolDto: FPoolDto
	profileDto: FProfileDto
}
export default function RecipientSteps(props: Props) {
	const { poolDto, profileDto } = props
	const steps: Steps = useAppSelector(state => state.uiSlice.steps)

	const stepContent: JSX.Element[] = [
		<RegisterRecipientForm
			amount={poolDto.amount}
			key={0}
			poolDto={poolDto}
			profileDto={profileDto}
		/>,
		<AuthorizeRecipient key={1} />,
		<AllocateRecipient key={2} />
	]

	return (
		<>
			<div className='w-[95%] mx-auto px-4 sm:px-0 mt-4'>
				<ul aria-label='Steps' className='flex items-center'>
					{steps.count.map((item, index) => (
						<li
							key={index}
							aria-current={steps.current === index ? 'step' : false}
							className='flex-1 last:flex-none flex items-center'
						>
							<div className='flex flex-col items-center'>
								<div
									className={`size-6 rounded-full border-2 flex-none flex items-center justify-center ${
										steps.current > index
											? 'bg-primary border-primary'
											: '' || steps.current === index
												? 'border-primary'
												: ''
									}`}
								>
									<span
										className={`size-2 rounded-full bg-primary ${
											steps.current !== index ? 'hidden' : ''
										}`}
									></span>
									{steps.current > index ? (
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
									index === steps.count.length - 1
										? 'hidden'
										: '' || steps.current > index
											? 'border-primary'
											: ''
								}`}
							/>
						</li>
					))}
				</ul>
			</div>
			<div className='mt-4'>{stepContent[steps.current]}</div>
		</>
	)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AuthorizeRecipient(): JSX.Element {
	return (
		<div className='text-center'>
			<h1 className='text-xl font-bold text-primary mb-2'>
				Now set recipient status to InReview
			</h1>
			<p>Please authorize the recipient</p>
			<DialogFooter className='justify-center'>
				<Button className='mt-2'>Close</Button>
			</DialogFooter>
		</div>
	)
}

function AllocateRecipient(): JSX.Element {
	return (
		<div className='text-center'>
			<h1 className='text-xl font-bold text-primary mb-2'>
				Allocate funds to recipient
			</h1>
			<p>Please allocate the funds</p>
			<DialogFooter className='justify-center'>
				<Button className='mt-2'>Close</Button>
			</DialogFooter>
		</div>
	)
}
