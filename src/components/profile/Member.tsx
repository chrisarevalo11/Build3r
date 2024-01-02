import { useClipboard } from '@/hooks/useClipboard'
import { formatAddress } from '@/utils'
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@radix-ui/react-tooltip'

export default function Member({ address }: { address: string }): JSX.Element {
	const [copy, copied] = useClipboard()

	return (
		<li className='text-foreground font-bold w-fit'>
			{formatAddress(address)}
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<button className='px-2 pb-[-4px]' onClick={() => copy(address)}>
							{copied ? <CheckIcon /> : <CopyIcon />}
						</button>
					</TooltipTrigger>
					<TooltipContent>
						<p className='text-white bg-primary px-2 text-sm mb-1 py-1 rounded-lg'>
							{copied ? 'Copied!' : 'Copy'}{' '}
						</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</li>
	)
}
