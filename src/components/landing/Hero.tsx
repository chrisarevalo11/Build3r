import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/Button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export function Hero(): JSX.Element {
	const navigate = useNavigate()

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId)

		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<>
			<section className='py-10 mt-5 overflow-hidden'>
				<div className='mx-auto text-gray-600 gap-x-12 items-center justify-between overflow md:flex md:px-4'>
					<div className='flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl motion-safe:animate-hero-text-sm md:motion-safe:animate-hero-text'>
						<h2 className='text-4xl text-primary font-extrabold md:text-5xl'>
							Helping the communities to build their own cities
						</h2>
						<p>
							Creating the new era of real estate development driven by the
							communties
						</p>
						<div className='items-center gap-x-3 space-y-3 sm:flex sm:space-y-0'>
							<Button
								onClick={() => navigate('/create')}
								className='group flex items-center justify-center gap-x-2'
							>
								Create a project
								<ArrowRightIcon className='w-4 h-4 group-hover:translate-x-1 transition' />
							</Button>
							<Button
								variant={'outline'}
								onClick={e => {
									e.preventDefault()
									scrollToSection('how-it-works')
								}}
								className='text-primary hover:bg-white border-primary hover:text-primary/80 hover:border-primary/80'
							>
								Learn more
							</Button>
						</div>
					</div>
					<div className='flex-none mt-14 md:mt-0 md:max-w-xl motion-safe:animate-hero-image-sm md:motion-safe:animate-hero-image'>
						<img
							src='/images/hero.webp'
							className=' md:rounded-tl-[108px] md:rounded-br-[108px] w-full md:h-[350px]'
							alt='hero'
						/>
					</div>
				</div>
				<div className='mt-20 px-4 md:px-8 md:motion-safe:animate-sponsors'>
					<p className='text-center text-sm my-5 text-gray-700 font-semibold'>
						Trusted by the best companies
					</p>
					<div className='w-full'>
						<ul className='flex items-center flex-wrap justify-center lg:justify-between gap-4'>
							<li>
								<img
									src='/images/arbitrum.webp'
									alt='arbitrum'
									className='h-[60px] grayscale'
								/>
							</li>
							<li>
								<img
									src='/images/allo.svg'
									alt='arbitrum'
									className='h-[60px] grayscale scale-90'
								/>
							</li>
							<li>
								<img
									src='/images/fleek.webp'
									alt='arbitrum'
									className='h-[60px] grayscale scale-90'
								/>
							</li>
							<li>
								<img
									src='/images/web3storage.webp'
									alt='arbitrum'
									className='h-[60px] grayscale scale-90'
								/>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
