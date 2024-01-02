import { Badge } from '@/components/ui/badge'
import { Card, CardDescription } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { grantFormValuesTypes } from '@/types'

type Props = {
	formValues: grantFormValuesTypes
}

export default function GrantCard(props: Props): JSX.Element {
	const { formValues } = props
	const { name, image, amount, tags, description, organizer } = formValues

	return (
		<Card
			className={
				'p-3 flex items-center rounded-xl gap-3 w-full h-fit sticky lg:top-4'
			}
		>
			<picture
				style={{ width: 'min(200px, 60%)' }}
				className='h-[120px] rounded-xl overflow-hidden'
			>
				{image ? (
					<div
						style={{
							backgroundImage: `url(${image})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat'
						}}
						className='size-full'
					></div>
				) : (
					<Skeleton className='size-full border-input border-2' />
				)}
			</picture>
			<div className='flex flex-col w-full lg:h-[110px] justify-between gap-2 lg:gap-0'>
				<div className='flex flex-col justify-center md:flex-row md:justify-between items-start md:items-center'>
					<h1 className='text-md lg:text-lg font-bold text-primary line-clamp-1'>
						{name}
					</h1>
					<h2 className='text-sm lg:text-md line-clamp-1'>
						<span className='text-primary font-bold -pb-5'>{amount} ETH</span>{' '}
						by {organizer}
					</h2>
				</div>
				<CardDescription className='line-clamp-2'>
					{description}
				</CardDescription>
				<div className='flex flex-wrap gap-[2px] md:gap-1 md:my-1'>
					{tags.length &&
						tags.map(
							(tag, index) =>
								tag && (
									<Badge className='p-1 lg:px-2' key={index}>
										{tag}
									</Badge>
								)
						)}
				</div>
			</div>
		</Card>
	)
}
