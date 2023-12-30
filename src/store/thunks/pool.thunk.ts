import { ethers } from 'ethers'

import { getAlloContracts as getAlloInstanceContracts } from '@/functions/allo-instance.functions'
import { FPoolSubmition } from '@/models/pool.model'
import { createAsyncThunk } from '@reduxjs/toolkit'

// import { setPoolFetched, setPoolsFetched } from '../slides/poolSlice'
import { setLoading } from '../slides/uiSlice'

export const createPool = createAsyncThunk(
	'pool/createPool',
	async (
		{
			fPoolSubmition,
			providerOrSigner
		}: {
			fPoolSubmition: FPoolSubmition
			providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
		},
		{ dispatch }
	) => {
		dispatch(setLoading(true))
		const { allo } = getAlloInstanceContracts(providerOrSigner)

		const createPoolTx = await allo.createPoolWithCustomStrategy(
			fPoolSubmition.profileId,
			fPoolSubmition.strategy,
			fPoolSubmition.initStrategyData,
			fPoolSubmition.token,
			fPoolSubmition.amount,
			fPoolSubmition.metadata,
			fPoolSubmition.managers,
			{
				value: fPoolSubmition.amount,
				gasLimit: 6000000
			}
		)

		await createPoolTx.wait(1)
		// dispatch(setPoolFetched(false))
		// dispatch(setPoolsFetched(false))
		dispatch(setLoading(false))
	}
)
