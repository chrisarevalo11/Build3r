import { ArrowRightIcon } from '@radix-ui/react-icons'

import { Button } from '../ui/Button'

export function Hero(): JSX.Element {
	return (
		<>
			<section className='py-10 mt-5'>
				<div className='max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-4'>
					<div className='flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl'>
						<h1 className='text-sm text-primary font-medium'>
							Over 200 successful deals
						</h1>
						<h2 className='text-4xl text-primary font-extrabold md:text-5xl'>
							We help startups to grow and make money
						</h2>
						<p>
							Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
							doloremque laudantium, totam rem aperiam, eaque ipsa quae.
						</p>
						<div className='items-center gap-x-3 space-y-3 sm:flex sm:space-y-0'>
							<Button className='group flex items-center justify-center gap-x-2'>
								Let&apos;s get started
								<ArrowRightIcon className='w-4 h-4 group-hover:translate-x-1 transition' />
							</Button>
							<Button
								variant={'outline'}
								className='text-primary hover:bg-white border-primary hover:text-primary/80 hover:border-primary/80'
							>
								Learn more
							</Button>
						</div>
					</div>
					<div className='flex-none mt-14 md:mt-0 md:max-w-xl'>
						<img
							src='/images/hero.webp'
							className=' md:rounded-tl-[108px] md:rounded-br-[108px] w-full md:h-[350px]'
							alt='hero'
						/>
					</div>
				</div>
				<div className='w-full inline-flex flex-nowrap'>
					<ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none'></ul>
				</div>
				<div className='mt-14 px-4 md:px-8'>
					<p className='text-center text-sm text-gray-700 font-semibold'>
						Trusted by the best companies
					</p>
					<div className='flex justify-center lg:justify-between items-center flex-wrap gap-x-12 gap-y-6 mt-6'>
						<picture>
							<img
								src='/images/arbitrum.webp'
								alt='arbitrum'
								className='h-[60px] grayscale'
							/>
						</picture>
						<picture>
							<img
								src='/images/allo.svg'
								alt='arbitrum'
								className='h-[60px] grayscale scale-90'
							/>
						</picture>
						<picture>
							<img
								src='/images/fleek.webp'
								alt='arbitrum'
								className='h-[60px] grayscale scale-90'
							/>
						</picture>
						<picture>
							<img
								src='/images/web3storage.webp'
								alt='arbitrum'
								className='h-[60px] grayscale scale-90'
							/>
						</picture>
					</div>
				</div>
			</section>
		</>
	)
}
