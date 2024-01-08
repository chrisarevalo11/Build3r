import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'

import { Button } from '../ui/Button'

export function MilestoneEvidence(): JSX.Element {
	return (
		<section className='space-y-3 w-full p-2 rounded-xl border-2 border-border'>
			<h1 className='text-xl font-bold text-center text-primary'>
				Milestone 1 evidence
			</h1>
			<Carousel className='w-full max-w-xs mx-auto'>
				<CarouselContent>
					{Array.from({ length: 3 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className='p-1'>
								<Card>
									<CardContent className='flex aspect-square items-center justify-center p-6'>
										<img src='/images/folder.svg' alt='' />
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
					{Array.from({ length: 3 }).map((_, index) => (
						<Button variant={'link'} key={index}>
							https://example.com
						</Button>
					))}
				</div>
			</div>
			<div>
				<h2 className='text-lg font-semibold text-primary ml-2'>Files</h2>
				<div className='grid grid-cols-3 gap-3 rounded-xl border-2 border-border'>
					{Array.from({ length: 3 }).map((_, index) => (
						<div key={index} className='cursor-pointer'>
							<img
								src='/images/folder.svg'
								alt='img'
								className='w-[90%] mx-auto'
							/>
							<p className='text-center'>files</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
