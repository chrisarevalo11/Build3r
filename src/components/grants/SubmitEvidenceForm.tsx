import { useState } from 'react'
import { ethers } from 'ethers'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Button } from '@/components/ui/Button'
import { DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
	Milestone,
	MilestoneEvidenceSubmissionDto
} from '@/models/milestone.model'
import { FProfileDto } from '@/models/profile.model'
import { Recipient } from '@/models/recipient.model'
import { AppDispatch, useAppSelector } from '@/store'
import { submitMilestone } from '@/store/thunks/milestone.thunk'
import { Label } from '@radix-ui/react-label'

import Loader from '../ui/Loader'
import { useToast } from '../ui/use-toast'

type Props = {
	id: number
	milestone: Milestone
}

type TUploadedFiles = {
	images: FileList
	files: FileList
}

type FormData = {
	images: File[]
	links: string
	files: File[]
}

export default function SubmitEvidenceForm(props: Props): JSX.Element {
	const { id, milestone } = props

	const [uploadedFiles, setUploadedFiles] = useState<TUploadedFiles>({
		images: new DataTransfer().files,
		files: new DataTransfer().files
	})
	const { register, handleSubmit } = useForm<FormData>()

	const { toast } = useToast()

	const recipient: Recipient = useAppSelector(
		state => state.recipientSlice.recipient
	)

	const loading = useAppSelector(state => state.uiSlice.loading)

	const dispatch = useDispatch<AppDispatch>()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmitMilestone = async (values: FormData) => {
		const milestoneId: number = id
		const links = values.links.split(',')

		if (
			values.images.length === 0 ||
			values.files.length === 0 ||
			links[0] === ''
		) {
			toast({
				title: 'Error',
				description: 'Please upload evidence for each field',
				variant: 'destructive'
			})
			return
		}

		const milestoneEvidenceSubmissionDto: MilestoneEvidenceSubmissionDto = {
			milestoneId,
			recipientId: recipient.recipientAddress,
			title: milestone.metadata.title,
			description: milestone.metadata.description,
			deadline: milestone.metadata.deadline,
			images: [...values.images],
			files: [...values.files],
			links
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const ethereum = (window as any).ethereum
		const web3Provider: ethers.BrowserProvider = new ethers.BrowserProvider(
			ethereum
		)
		await web3Provider.send('eth_requestAccounts', [])
		const web3Signer: ethers.JsonRpcSigner = await web3Provider.getSigner()
		dispatch(
			submitMilestone({
				milestoneEvidenceSubmissionDto,
				providerOrSigner: web3Signer
			})
		)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmitMilestone)}
			className='flex flex-col gap-3 max-h-[60vh] overflow-y-scroll no-scrollbar'
		>
			<Label className='font-semibold'>
				Images (max. 3)
				<Input
					{...register('images')}
					type='file'
					disabled={loading}
					accept='image/*'
					className='cursor-pointer'
					multiple
					onChange={e => {
						if (e.target.files && e.target.files.length > 0) {
							const selectedFiles = e.target.files
							if (selectedFiles.length > 3) {
								toast({
									title: 'Error',
									description: 'Please select up to 3 images',
									duration: 3000,
									variant: 'destructive'
								})
								e.target.value = ''
							} else {
								setUploadedFiles({
									...uploadedFiles,
									images: selectedFiles
								})
							}
						}
					}}
				/>
			</Label>
			{uploadedFiles.images.length > 0 && (
				<div className='grid grid-cols-3 gap-2 items-center'>
					{Array.from(uploadedFiles.images).map((file: File, index: number) => (
						<img
							key={index}
							src={URL.createObjectURL(file)}
							alt={file.name}
							className='w-full max-h-[80px] object-cover'
						/>
					))}
				</div>
			)}
			<Label className='font-semibold'>
				Links (separed by commas)
				<Textarea
					{...register('links')}
					name='links'
					placeholder='https://example.com'
					disabled={loading}
				/>
			</Label>
			<Label className='font-semibold'>
				Files (max. 3)
				<Input
					{...register('files')}
					type='file'
					disabled={loading}
					className='cursor-pointer'
					multiple
					onChange={e => {
						if (e.target.files && e.target.files.length > 0) {
							const selectedFiles = e.target.files
							if (selectedFiles.length > 3) {
								toast({
									title: 'Error',
									description: 'Please select up to 3 files',
									duration: 3000,
									variant: 'destructive'
								})
								e.target.value = ''
							} else {
								setUploadedFiles({
									...uploadedFiles,
									files: selectedFiles
								})
							}
						}
					}}
				/>
			</Label>
			{uploadedFiles.files.length > 0 && (
				<div className='grid grid-cols-3 gap-2 items-center'>
					{Array.from(uploadedFiles.files).map((file: File, index: number) => (
						<div
							key={index}
							className='flex flex-col items-center truncate overflow-ellipsis'
						>
							<img
								src={'/images/folder.svg'}
								alt={file.name}
								className='w-full max-h-[80px] object-contain'
							/>
							<p>{file.name}</p>
						</div>
					))}
				</div>
			)}
			<DialogFooter>
				<Button type='submit' className='mt-5'>
					{loading ? <Loader type='white' /> : 'Submit'}
				</Button>
			</DialogFooter>
		</form>
	)
}
