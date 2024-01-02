import { BytesLike, ethers } from 'ethers'

import { getAlloContracts } from '@/functions/allo-instance.functions'
import { getStrategiesContracts } from '@/functions/strategies/strategies.functions'
import { getRecipient } from '@/services/allo-contract.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { setLoading } from '../slides/uiSlice'

export const addRecipient = createAsyncThunk(
	'recipient/addREcipient',
	async (
		{
			poolId,
			frecipientSubmition,
			frecipientDtoWallet,
			providerOrSigner
		}: {
			frecipientSubmition: BytesLike
			frecipientDtoWallet: string
			poolId: string
			providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
		},
		{ dispatch }
	) => {
		try {
			dispatch(setLoading(true))
			const { allo } = getAlloContracts(providerOrSigner)
			const { directGrantsSimple } = getStrategiesContracts(providerOrSigner)
			await getRecipient(providerOrSigner)

			const registerRecipientTx = await allo.registerRecipient(
				poolId,
				frecipientSubmition,
				{
					value: 0,
					gasLimit: 6000000
				}
			)

			await registerRecipientTx.wait(1)

			const setRecipientStatusToInReviewTx =
				await directGrantsSimple.setRecipientStatusToInReview([
					frecipientDtoWallet
				])

			await setRecipientStatusToInReviewTx.wait(1)

			alert('Recipient added!')
			dispatch(setLoading(false))
		} catch (error) {
			alert('Error adding recipient!')
			dispatch(setLoading(false))
			console.error(error)
		}
	}
)
