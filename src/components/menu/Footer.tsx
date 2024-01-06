import Logo from '@/components/ui/Logo'

export default function Footer() {
	return (
		<footer className='relative mt-16 bg-primary bottom-0'>
			<svg
				className='absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-primary'
				preserveAspectRatio='none'
				viewBox='0 0 1440 54'
			>
				<path
					fill='currentColor'
					d='M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z'
				/>
			</svg>
			<div className='px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<div className='flex flex-col items-center gap-5 pb-12'>
					<div className='flex items-center gap-3 lg:col-span-2'>
						<Logo color='white' />
						<h1 className='uppercase font-bold text-3xl text-white tracking-tighter'>
							Build3r
						</h1>
					</div>
					<p className='text-lg text-center text-white/90'>
						Build with ❤️ in <span className='font-bold'>🇨🇴</span>
					</p>
				</div>
			</div>
		</footer>
	)
}
