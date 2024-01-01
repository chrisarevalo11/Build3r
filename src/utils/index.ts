import { type ClassValue, clsx } from 'clsx'
import { BytesLike, ethers } from 'ethers'
import { twMerge } from 'tailwind-merge'

export function dataArrayToBytes(
	structTypes: string[],
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any[]
): BytesLike {
	const abiCoder = new ethers.AbiCoder()
	return abiCoder.encode(structTypes, data)
}

export function grantPorcetageToAmount(
	grantAmount: number,
	totalAmount: number
): number {
	return grantAmount / totalAmount
}

export function toDecimal(amount: number): bigint {
	return ethers.parseEther(amount.toString())
}

export function formatAddress(address: string): string {
	return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function handleDate(date: number): string {
	const dateObject: Date = new Date(date * 1000)

	const year = dateObject.getFullYear()
	const month = dateObject.getMonth() + 1
	const day = dateObject.getDate()

	const dateFormatted = `${year}-${month}-${day}`

	return dateFormatted
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function convertToUnixTime(dateStr: string): number {
	const date = new Date(dateStr)
	return Math.floor(date.getTime() / 1000)
}
