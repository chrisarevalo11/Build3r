import { ArrowDownIcon } from '@radix-ui/react-icons'

export default function CreateHero(): JSX.Element {
	return (
		<section className='grid grid-cols-1 md:grid-cols-5 w-full my-10'>
			<header className='bg-primary md:rounded-r-full md:col-span-3 text-white flex flex-col justify-evenly items-center p-4 text-center gap-5 md:pr-14'>
				<h1 className='font-soria text-[3rem] md:text-[5rem] leading-10 md:leading-[60px] m-2'>
					Create a proposal
				</h1>
				<h2 className='text-xl md:text-2xl md:px-10'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
					deserunt?
				</h2>
				<ArrowDownIcon className='animate-bounce size-8 md:size-10 m-2' />
			</header>
			<div className='size-full md:col-span-2 hidden md:flex justify-center items-center'>
				<img
					src='/images/create-hero.webp'
					alt='create-hero'
					className='w-[60%]'
				/>
			</div>
		</section>
	)
}
