export default function GrantHeader({
	name,
	amount,
	profileName
}: {
	name: string
	amount: string
	profileName: string
}): JSX.Element {
	return (
		<>
			<h1 className='text-2xl font-bold text-primary text-center'>
				{name} ({parseInt(amount) / 10 ** 9} ETH)
			</h1>
			<h2 className='text-lg text-center'>By {profileName}</h2>
		</>
	)
}
