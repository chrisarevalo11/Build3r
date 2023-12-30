import { DetailedHTMLProps } from 'react'

import { cn } from '@/utils'

type TContainer = DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> &
	object

export function Container(props: TContainer): JSX.Element {
	const { className, children, ...rest } = props

	return (
		<div
			style={{ marginInline: 'auto' }}
			className={cn('w-full p-2 max-w-[1200px] mx-auto', className)}
			{...rest}
		>
			{children}
		</div>
	)
}
