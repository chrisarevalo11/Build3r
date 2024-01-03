import { Badge } from '@/components/ui/badge'
import { BookmarkIcon } from '@radix-ui/react-icons'

export default function GrantTags({ tags }: { tags: string[] }): JSX.Element {
	return (
		<div className='md:w-[30%] md:p-2 h-fit'>
			<h3 className='flex items-center gap-2 text-primary font-bold'>
				<BookmarkIcon />
				Tags
			</h3>
			<div className='flex flex-wrap gap-2 my-2'>
				{tags.map((tag, index) => (
					<Badge className='py-1 px-2' key={index}>
						{tag}
					</Badge>
				))}
			</div>
		</div>
	)
}
