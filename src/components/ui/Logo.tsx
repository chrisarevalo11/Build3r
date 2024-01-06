type Props = {
	color?: 'red' | 'white'
}

const colors = {
	red: '#f85959',
	white: '#ffffff'
}

export default function Logo(props: Props): JSX.Element {
	const { color = 'red' } = props

	return (
		<svg
			width='80'
			height='80'
			viewBox='0 0 512 512'
			fill={colors[color]}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M292.3 34.87C306.76 41.14 320.41 49.29 333.76 57.51C361.253 74.4233 388.9 91.5966 416.7 109.03C422.027 112.37 427.4 115.897 432.82 119.61C445.51 128.31 457.35 137.75 466.33 149.92C474.643 161.2 479.997 174.617 482.39 190.17C485.15 208.08 485.25 226.11 485.29 244.84C485.377 286.36 485.28 319.227 485 343.44C484.76 364.79 483.65 387.79 478.95 409.24C471.94 441.18 453.01 465.13 421.71 475.72C411.217 479.273 399.397 481.667 386.25 482.9C369.87 484.433 350.963 485.213 329.53 485.24C283.27 485.307 238.173 485.317 194.24 485.27C181.893 485.257 170.02 485.127 158.62 484.88C139.7 484.47 119.94 483.12 101.09 478.83C71.31 472.07 48.77 454.02 37.81 425.11C34.21 415.61 31.6533 404.903 30.14 392.99C28.06 376.61 26.96 356.897 26.84 333.85C26.6667 299.73 26.65 266.663 26.79 234.65C26.8433 221.903 27.37 210.133 28.37 199.34C30.62 174.97 38.98 154.02 57.1 137.08C62.5867 131.953 68.3333 127.287 74.34 123.08C83.6133 116.593 92.9433 110.433 102.33 104.6C126.677 89.4666 151.23 74.2233 175.99 58.87C188.67 51.01 200.57 44.2466 211.69 38.58C223.7 32.47 237.06 27.89 250.54 26.9C263.88 25.92 277.8 28.5766 292.3 34.87ZM131.96 451.39C144.14 452.39 154.09 452.923 161.81 452.99C213.543 453.43 270.107 453.503 331.5 453.21C345.127 453.15 358.24 452.787 370.84 452.12C384.933 451.373 397.377 449.493 408.17 446.48C427.823 440.98 440.5 428.173 446.2 408.06C449.213 397.413 451.113 385.127 451.9 371.2C452.687 357.173 453.12 344.19 453.2 332.25C453.44 294.73 453.423 260.313 453.15 229C453.063 219.64 452.653 211.05 451.92 203.23C451.247 196.177 450.157 190.197 448.65 185.29C445.223 174.117 438.757 164.677 429.25 156.97C420.543 149.91 411.343 143.353 401.65 137.3C376.103 121.34 350.4 105.347 324.54 89.32C313.807 82.66 303.637 76.6333 294.03 71.24C280.25 63.51 264.52 56.76 248.59 59.25C240.81 60.47 232.71 63.79 225.59 67.35C218.043 71.1233 210.95 75.0466 204.31 79.12C179.47 94.34 153.813 110.18 127.34 126.64C116.373 133.46 106.397 139.887 97.41 145.92C91.2833 150.04 85.5067 154.51 80.08 159.33C66.37 171.51 61.65 186.12 60.04 203.78C59.3333 211.533 58.9433 219.607 58.87 228C58.61 258.853 58.5567 290.603 58.71 323.25C58.82 347.82 58.88 372.1 62.98 396.08C67.09 420.18 77.9 438.68 102.58 446.09C111.387 448.73 121.18 450.497 131.96 451.39Z'
				fill={colors[color]}
			/>
			<path
				d='M269.901 377.458C238.721 380.918 207.481 372.568 182.461 353.788C178.107 350.521 175.954 346.055 176.001 340.388C176.091 330.558 185.701 323.368 195.161 325.338C197.661 325.858 200.297 327.141 203.071 329.188C220.451 342.008 243.401 348.088 264.581 345.908C280.727 344.248 295.517 338.641 308.951 329.088C313.501 325.848 317.781 324.148 323.431 325.428C334.141 327.858 339.351 340.128 333.461 349.438C332.107 351.571 329.821 353.738 326.601 355.938C308.774 368.065 289.874 375.238 269.901 377.458Z'
				fill={colors[color]}
			/>
		</svg>
	)
}
