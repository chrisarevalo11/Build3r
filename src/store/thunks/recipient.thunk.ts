import { BytesLike, ethers } from 'ethers'

import { getAlloContracts } from '@/functions/allo-instance.functions'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { setLoading } from '../slides/uiSlice'

export const addRecipient = createAsyncThunk(
	'recipient/addREcipient',
	async (
		{
			poolId,
			frecipientSubmition,
			providerOrSigner
		}: {
			poolId: string
			frecipientSubmition: BytesLike
			providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
		},
		{ dispatch }
	) => {
		try {
			dispatch(setLoading(true))
			const { allo } = getAlloContracts(providerOrSigner)

			const registerRecipientTx = await allo.registerRecipient(
				poolId,
				frecipientSubmition,
				{
					value: 0,
					gasLimit: 6000000
				}
			)

			await registerRecipientTx.wait(1)

			alert('Recipient added!')
			dispatch(setLoading(false))
		} catch (error) {
			alert('Error adding recipient!')
			dispatch(setLoading(false))
			console.error(error)
		}
	}
)
