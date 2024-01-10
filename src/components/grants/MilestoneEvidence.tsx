import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { Milestone } from '@/models/milestone.model'

type Props = {
	milestone: Milestone
}

export function MilestoneEvidence(props: Props): JSX.Element {
	const { milestone } = props
	return (
		<section className='space-y-3 w-full p-2 rounded-xl border-2 border-border'>
			<h1 className='text-xl font-bold text-center text-primary'>
				Milestone 1 evidence
			</h1>
			<Carousel className='w-full max-w-xs mx-auto'>
				<CarouselContent>
					{milestone.metadata.images?.map((image: string, index: number) => (
						<CarouselItem key={index}>
							<div className='p-1'>
								<Card>
									<CardContent className='flex aspect-square items-center justify-center p-6'>
										<img src={image} alt='image' />
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div>
				<h2 className='text-lg font-semibold text-primary ml-2'>Links</h2>
				<div className='flex flex-col rounded-xl border-2 border-border items-start overflow-clip py-2'>
					{milestone.metadata.links?.map((link: string, index: number) => (
						<p key={index}>
							<a
								href={link}
								target='_blank'
								rel='noopener noreferrer'
								className='truncate overflow-ellipsis text-primary hover:underline p-2'
							>
								{link}
							</a>
						</p>
					))}
				</div>
			</div>
			<div>
				<h2 className='text-lg font-semibold text-primary ml-2'>Files</h2>
				<div className='grid grid-cols-3 gap-3 rounded-xl border-2 border-border'>
					{milestone?.metadata?.files?.map((file: string, index: number) => (
						<div key={index} className='cursor-pointer overflow-hidden'>
							<img
								src='/images/folder.svg'
								alt='img'
								className='w-[80%] mx-auto'
							/>
							<a
								href={file}
								target='_blank'
								rel='noopener noreferrer'
								className='text-center truncate p-2 text-primary hover:underline'
							>
								{file}
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
