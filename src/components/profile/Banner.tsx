export default function Banner({
	imageURL
}: {
	imageURL: string
}): JSX.Element {
	return (
		<div
			style={{
				backgroundImage: `url(${imageURL})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
			className='w-full h-72 rounded-xl'
		/>
	)
}
