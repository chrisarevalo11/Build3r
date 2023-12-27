import { DetailedHTMLProps } from 'react'

import { cn } from '@/utils'

type TTextarea = DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
> & {}

export function Textarea(props: TTextarea): JSX.Element {
	const { className, children, ...rest } = props
	return (
		<>
			<textarea
				className={cn(
					'textarea textarea-bordered w-full bg-gray-700 resize-none no-scrollbar',
					className
				)}
				{...rest}
			>
				{children}
			</textarea>
		</>
	)
}
