import { Oval } from 'react-loader-spinner'

type Props = {
	type?: 'red' | 'white'
}

export default function Loader(props: Props): JSX.Element {
	const { type = 'red' } = props
	return (
		<Oval
			width={type === 'white' ? 25 : 50}
			height={type === 'white' ? 25 : 50}
			color={type === 'white' ? '#fff' : '#f65f5b'}
			secondaryColor={type === 'white' ? '#ededed' : '#f65f5b44'}
		/>
	)
}
