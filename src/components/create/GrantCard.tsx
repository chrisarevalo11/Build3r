import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { grantFormValuesTypes } from '@/types'

type Props = {
	formValues: grantFormValuesTypes
}

export default function GrantCard({ formValues }: Props): JSX.Element {
	const {
		name,
		image,
		amount,
		tags: tagsArray,
		description,
		organizer
	} = formValues

	const tags: string[] =
		typeof tagsArray === 'string' ? tagsArray.split(',') : tagsArray

	return (
		<div
			className={
				'p-3 flex flex-col  items-center rounded-xl gap-3 w-full max-w-[300px] sticky lg:top-4 h-[400px] shadow-xl m-2 border-gray-200 border-2'
			}
		>
			{image ? (
				<div
					style={{
						backgroundImage: `url(${image})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat'
					}}
					className='w-full h-[40%] bg-gray-300 rounded-xl top-6 left-4'
				></div>
			) : (
				<Skeleton className='w-full h-[40%] rounded-xl border-gray-200 border-2' />
			)}
			<div className='text-center flex flex-col grow justify-between w-full'>
				<h1 className='text-xl font-bold text-primary'>{name}</h1>
				<div className='text-center text-sm text-slate-400'>{organizer}</div>
				<div className='text-center text-sm text-slate-400'>{amount}</div>
				<div className='text-center text-sm text-slate-400'>{description}</div>
				<div className='flex justify-center flex-wrap gap-1 p-1'>
					{tagsArray &&
						tags.map((tag, index) => tag && <Badge key={index}>{tag}</Badge>)}
				</div>
			</div>
		</div>
	)
}
