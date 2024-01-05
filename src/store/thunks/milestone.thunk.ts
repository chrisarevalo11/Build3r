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
			milestoneSubmissionDto,
			providerOrSigner
		}: {
			milestoneSubmissionDto: MilestoneSubmissionDto
			providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
		},
		{ dispatch }
	) => {
		try {
			dispatch(setLoading(true))
			const { directGrantsSimple } = getStrategiesContracts(providerOrSigner)

			const milestoneSubmission: MilestoneSubmission =
				await milestoneSubmissionDtoToMilestoneSubmission(
					milestoneSubmissionDto
				)

			const setMilestonesTx = await directGrantsSimple.setMilestones(
				milestoneSubmissionDto.wallet,
				[milestoneSubmission, milestoneSubmission]
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
