import { BytesLike, ethers } from 'ethers'

import { ALLOCATE_DATA_STRUCT_TYPES } from '@/constants/structs-types.constants'
import { getAlloContracts } from '@/functions/allo-instance.functions'
import { convertToAllocateData } from '@/functions/dtos/recipient.dtos'
import { getStrategiesContracts } from '@/functions/strategies/strategies.functions'
import { getRecipient } from '@/services/allo-contract.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { setLoading, setSteps } from '../slides/uiSlice'

export const addRecipient = createAsyncThunk(
	'recipient/addREcipient',
	async (
		{
			anchor,
			grantAmount,
			frecipientSubmition,
			frecipientDtoWallet,
			poolId,
			providerOrSigner
		}: {
			anchor: string
			grantAmount: number
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
			dispatch(setSteps(1))

			const setRecipientStatusToInReviewTx =
				await directGrantsSimple.setRecipientStatusToInReview([anchor])

			await setRecipientStatusToInReviewTx.wait(1)
			dispatch(setSteps(2))

			const allocateDataBytes: BytesLike = await convertToAllocateData(
				frecipientDtoWallet,
				grantAmount
			)

			const setAllocateTx = await allo.allocate(poolId, allocateDataBytes, {
				value: 0,
				gasLimit: 6000000
			})

			await setAllocateTx.wait(1)
			dispatch(setSteps(3))

			dispatch(setLoading(false))
		} catch (error) {
			alert('Error adding recipient!')
			dispatch(setLoading(false))
			console.error(error)
		}
	}
)
