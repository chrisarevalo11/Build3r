import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { Milestone } from '@/models/milestone.model'

import { Button } from '../ui/Button'

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
				<div className='flex flex-col rounded-xl border-2 border-border items-start'>
					{milestone.metadata.links?.map((link: string, index: number) => (
						<Button key={index} variant={'link'}>
							{link}
						</Button>
					))}
				</div>
			</div>
			<div>
				<h2 className='text-lg font-semibold text-primary ml-2'>Files</h2>
				<div className='grid grid-cols-3 gap-3 rounded-xl border-2 border-border'>
					{milestone?.metadata?.files?.map((file: string, index: number) => (
						<div key={index} className='cursor-pointer'>
							<img
								src='/images/folder.svg'
								alt='img'
								className='w-[90%] mx-auto'
							/>
							<p className='text-center'>{file}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
