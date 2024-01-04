import { InfoCircledIcon } from '@radix-ui/react-icons'

export default function GrantDescription({
	description
}: {
	description: string
}): JSX.Element {
	return (
		<div className='space-y-2 md:w-[70%]'>
			<h3 className='text-primary font-bold flex items-center gap-1'>
				<InfoCircledIcon /> Description
			</h3>
			<p>{description}</p>
		</div>
	)
}
