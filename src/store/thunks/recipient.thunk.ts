import { BytesLike, ethers } from 'ethers'

// import { getAlloContracts as getAlloInstanceContracts } from '@/functions/allo-instance.functions'
import { getStrategiesContracts } from '@/functions/strategies/strategies.functions'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { setLoading } from '../slides/uiSlice'

export const addRecipient = createAsyncThunk(
	'recipient/addREcipient',
	async (
		{
			address,
			frecipientSubmition,
			providerOrSigner
		}: {
			address: string
			frecipientSubmition: BytesLike
			providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
		},
		{ dispatch }
	) => {
		try {
			dispatch(setLoading(true))
			const { directGrantsSimple } = getStrategiesContracts(providerOrSigner)

			const registerRecipientTx = await directGrantsSimple.registerRecipient(
				frecipientSubmition,
				address,
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
