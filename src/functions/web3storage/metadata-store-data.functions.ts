import { File, Web3Storage } from 'web3.storage'

const ipfs = 'https://w3s.link/ipfs'

function getAccessToken() {
	if (!import.meta.env.VITE_WEB3STORAGE_TOKEN) {
		throw new Error('VITE_WEB3STORAGE_TOKEN not found in .env file')
	}

	return import.meta.env.VITE_WEB3STORAGE_TOKEN
}

function makeStorageClient() {
	return new Web3Storage({ token: getAccessToken() })
}

export async function storageFile(file: File): Promise<string> {
	const client = makeStorageClient()

	const cid = await client.put([file], {
		wrapWithDirectory: false
	})

	return `${ipfs}/${cid}`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function storeObject(object: any): Promise<string> {
	const client = makeStorageClient()

	const blob = new Blob([JSON.stringify(object)], { type: 'application/json' })
	const files = [new File([blob], 'metadata.json')]

	const cid = await client.put(files, {
		wrapWithDirectory: false
	})

	console.log('object cid: ', cid)

	return `${ipfs}/${cid}`
}
