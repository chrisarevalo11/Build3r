export default function Logo({ logoURL }: { logoURL: string }): JSX.Element {
	return (
		<div
			style={{
				backgroundImage: `url(${logoURL})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
			className='size-32 rounded-full overflow-hidden border-gray-400 border-2 relative -top-14 left-9 -mb-10'
		/>
	)
}
