import { ethers } from 'ethers'

import { milestoneSubmissionDtoToMilestoneSubmission } from '@/functions/dtos/milestone.dtos'
import { getStrategiesContracts } from '@/functions/strategies/strategies.functions'
import {
	MilestoneSubmission,
	MilestoneSubmissionDto
} from '@/models/milestone.model'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { setLoading } from '../slides/uiSlice'

export const setMilestones = createAsyncThunk(
	'milestone/setMilestones',
	async (
		{
			milestonesSubmissionDto,
			providerOrSigner
		}: {
			milestonesSubmissionDto: MilestoneSubmissionDto[]
			providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
		},
		{ dispatch }
	) => {
		try {
			dispatch(setLoading(true))
			const { directGrantsSimple } = getStrategiesContracts(providerOrSigner)

			const milestonesSubmission: MilestoneSubmission[] = await Promise.all(
				milestonesSubmissionDto.map(milestoneSubmissionDtoToMilestoneSubmission)
			)
			console.log('milestonesSubmission', milestonesSubmission)
			console.log(
				'milestonesSubmissionWallet',
				milestonesSubmissionDto[0].wallet
			)

			const setMilestonesTx = await directGrantsSimple.setMilestones(
				milestonesSubmissionDto[0].wallet,
				milestonesSubmission,
				{
					gasLimit: 6000000
				}
			)

			await setMilestonesTx.wait(1)

			dispatch(setLoading(false))
		} catch (error) {
			alert('Error setting milestones')
			dispatch(setLoading(false))
			console.error(error)
		}
	}
)
