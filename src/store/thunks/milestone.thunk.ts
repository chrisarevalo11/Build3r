import { BytesLike, ethers } from 'ethers'

import { getAlloContracts } from '@/functions/allo-instance.functions'
import {
	milestoneEvidenceDtoToMilestoneEvidecence,
	milestoneSubmissionDtoToMilestoneSubmission
} from '@/functions/dtos/milestone.dtos'
import { getStrategiesContracts } from '@/functions/strategies/strategies.functions'
import {
	MilestoneEvidenceSubmission,
	MilestoneEvidenceSubmissionDto,
	MilestoneSubmission,
	MilestoneSubmissionDto
} from '@/models/milestone.model'
import { setRecipientFetched } from '@/store/slides/recipientSlice'
import { setLoading } from '@/store/slides/uiSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const distributeMilestone = createAsyncThunk(
	'milestone/setMilestones',
	async (
		{
			recipientId,
			poolId,
			providerOrSigner
		}: {
			recipientId: string
			poolId: string
			providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
		},
		{ dispatch }
	) => {
		try {
			dispatch(setLoading(true))
			const { allo } = getAlloContracts(providerOrSigner)

			const recipientIds: string[] = [recipientId]
			const bytes: BytesLike = ethers.encodeBytes32String('')

			const distributeMilestoneTx = await allo.distribute(
				poolId,
				recipientIds,
				bytes,
				{
					gasLimit: 6000000
				}
			)

			await distributeMilestoneTx.wait(1)

			dispatch(setRecipientFetched(false))
		} catch (error) {
			alert('Error distributing milestone')
			dispatch(setLoading(false))
			console.error(error)
		}
	}
)

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
			const setMilestonesTx = await directGrantsSimple.setMilestones(
				milestonesSubmissionDto[0].wallet,
				milestonesSubmission,
				{
					gasLimit: 6000000
				}
			)

			await setMilestonesTx.wait(1)
			dispatch(setRecipientFetched(false))
			dispatch(setLoading(false))
		} catch (error) {
			alert('Error setting milestones')
			dispatch(setLoading(false))
			console.error(error)
		}
	}
)

export const submitMilestone = createAsyncThunk(
	'milestone/setMilestones',
	async (
		{
			milestoneEvidenceSubmissionDto,
			providerOrSigner
		}: {
			milestoneEvidenceSubmissionDto: MilestoneEvidenceSubmissionDto
			providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
		},
		{ dispatch }
	) => {
		try {
			dispatch(setLoading(true))
			const { directGrantsSimple } = getStrategiesContracts(providerOrSigner)

			const milestoneEvidenceSubmission: MilestoneEvidenceSubmission =
				await milestoneEvidenceDtoToMilestoneEvidecence(
					milestoneEvidenceSubmissionDto
				)

			const submitMilestoneTx = await directGrantsSimple.submitMilestone(
				milestoneEvidenceSubmission.recipientId,
				milestoneEvidenceSubmission.milestoneId,
				milestoneEvidenceSubmission.metadata,
				{
					gasLimit: 6000000
				}
			)

			await submitMilestoneTx.wait(1)

			dispatch(setRecipientFetched(false))
		} catch (error) {
			alert('Error submitting milestone')
			dispatch(setLoading(false))
			console.error(error)
		}
	}
)
