export default function GrantBanner({
	banner,
	logo
}: {
	banner: string
	logo: string
}): JSX.Element {
	return (
		<div
			style={{
				backgroundImage: `url(${banner})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
			className='w-full max-w-[700px] p-4 rounded-xl my-2 md:my-5 shadow-lg'
		>
			<img
				src={logo}
				alt={'logo'}
				className='size-20 border-2 border-input rounded-full mx-auto object-cover scale-[1.6] shadow-md'
			/>
		</div>
	)
}
