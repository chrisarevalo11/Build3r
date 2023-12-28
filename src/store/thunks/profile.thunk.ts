import { ethers } from 'ethers'

import { PROFILE_NOT_FOUND, PROFILES_NOT_FOUND } from '@/constants/constans'
import { getAlloContracts } from '@/functions/allo-functions'
import { getAlloContracts as getAlloInstanceContracts } from '@/functions/allo-instance.functions'
import { dtoToProfile, fProfileSubmitionToDto } from '@/functions/dtos'
import { FProfile, FProfileSubmition } from '@/models/profile.model'
import { getSubGraphData } from '@/services/register-subgraph.service'
import { Profile } from '@allo-team/allo-v2-sdk/dist/Registry/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

import {
	setProfile,
	setProfileFetched,
	setProfiles,
	setProfilesFetched
} from '../slides/profileSlice'
import { setLoading } from '../slides/uiSlice'

const { getProfileIdByOwner, getPaginatedProfiles } = getSubGraphData()

export const createProfile = createAsyncThunk(
	'profile/createProfile',
	async (
		{
			fProfileSubmition,
			providerOrSigner
		}: {
			fProfileSubmition: FProfileSubmition
			providerOrSigner: ethers.BrowserProvider | ethers.JsonRpcSigner
		},
		{ dispatch }
	) => {
		const { registry } = getAlloInstanceContracts(providerOrSigner)

		dispatch(setLoading(true))
		const profileSubmitionDto = fProfileSubmitionToDto(fProfileSubmition)
		const createProfileTx = await registry.createProfile(
			profileSubmitionDto.nonce,
			profileSubmitionDto.name,
			profileSubmitionDto.metadata,
			profileSubmitionDto.owner,
			profileSubmitionDto.members
		)

		await createProfileTx.wait(1)

		dispatch(setProfileFetched(false))
		// dispatch(setLoading(false))
	}
)

export const getProfile = createAsyncThunk(
	'profile/getProfile',
	async (address: string, { dispatch }) => {
		const { registry } = getAlloContracts()

		dispatch(setLoading(true))

		const profileId: string = await getProfileIdByOwner(address)

		if (profileId === PROFILE_NOT_FOUND) {
			dispatch(setProfileFetched(true))
			dispatch(setLoading(false))
			return
		}

		const profileDto: Profile = await registry.getProfileById(profileId)
		const profile: FProfile = dtoToProfile(profileDto)

		dispatch(setProfile(profile))
		dispatch(setProfileFetched(true))
		dispatch(setLoading(false))
	}
)

export const getProfiles = createAsyncThunk(
	'profile/getPaginatedProfiles',
	async ({ first, skip }: { first: number; skip: number }, { dispatch }) => {
		dispatch(setLoading(true))

		const profiles = await getPaginatedProfiles(first, skip)

		if (profiles === PROFILES_NOT_FOUND) {
			dispatch(setProfilesFetched(true))
			dispatch(setLoading(false))
			return
		}

		dispatch(setProfiles(profiles))
		dispatch(setProfilesFetched(true))
		dispatch(setLoading(false))
	}
)
