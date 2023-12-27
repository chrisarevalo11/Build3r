import { ChangeEvent, Dispatch, useState } from 'react'
import { BigNumber } from 'ethers'
import { useFormik } from 'formik'
import { Oval } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'

import { Input, Label,Textarea } from '@/components/ui'
import { FormValuesTypes } from '@/types'
// import { natureLinkContractWriteFunctions } from '@/constants/contract-functions'
import { toDecimal } from '@/utils'

import 'react-toastify/dist/ReactToastify.css'

type Props = {
	formValues: FormValuesTypes
	setFormValues: Dispatch<React.SetStateAction<FormValuesTypes>>
}

export default function ProjectForm(props: Props): JSX.Element {
	const { formValues, setFormValues } = props
	const [isLoading, setIsLoading] = useState<boolean>(false)

	// const { createProject } = natureLinkContractWriteFunctions()

	const navigate = useNavigate()

	const handleChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value }: { name: string; value: string } = event.target

		setFormValues({
			...formValues,
			[name]: value
		})
	}

	const formik = useFormik({
		initialValues: formValues,
		onSubmit: async () => {
			// const args: any[] = createProjectArgsDtoToCreateProjectArgs(formValues)

			// if (!createProject) return <div>ERROR!</div>
			setIsLoading(true)

			// const createProjectTx = createProject({
			// 	args,
			// 	overrides: { gasLimit: 6000000 }
			// })

			// const { receipt } = await createProjectTx

			setIsLoading(false)
			toast.success('Project created!', {
				autoClose: 2000
			})

			setTimeout(() => {
				navigate('/explore')
			}, 3000)
		}
	})

	return (
		<div className='card w-[95%] md:w-[90%] lg:w-1/2 bg-gray-900 shadow-xl m-2'>
			<form onSubmit={formik.handleSubmit}>
				<div className='card-body space-y-4'>
					<Label>
						<span>Project Name</span>
						<Input
							name='projectName'
							type='text'
							placeholder='My project'
							required
							onChange={handleChange}
						/>
					</Label>

					<Label>
						<span>Background Image</span>
						<Input
							name='bannerImage'
							type='url'
							placeholder='https://myproject.org/banner.png'
							required
							onChange={handleChange}
						/>
					</Label>

					<Label>
						<span>Logo Image</span>
						<Input
							name='logo'
							type='url'
							placeholder='https://myproject.org/logo.png'
							required
							onChange={handleChange}
						/>
					</Label>

					<Label>
						<span>Description</span>
						<Textarea
							name='description'
							placeholder='Use this field to describe your project as detailed as you need'
							required
							onChange={handleChange}
						></Textarea>
					</Label>

					<Label>
						<span>Link (website, blog, etc.)</span>
						<Input
							name='link'
							type='url'
							placeholder='https://myproject.org'
							required
							onChange={handleChange}
						/>
					</Label>

					<Label>
						<span>Amount</span>
						<div className={'join'}>
							<Input
								className='join-item'
								name='amount'
								step={'any'}
								type='number'
								placeholder='Amount required'
								required
								onChange={handleChange}
							/>
							<span className='join-item rounded-r-full px-5 bg-gray-800 flex items-center'>
								MATIC
							</span>
						</div>
					</Label>

					<div className='flex flex-col md:flex-row md:justify-center w-full md:my-6 gap-2'>
						<Label>
							<span>Start date</span>
							<Input
								name='startDate'
								type='date'
								required
								onChange={handleChange}
							/>
						</Label>

						<Label>
							<span>End date</span>
							<Input
								name='endDate'
								type='date'
								required
								onChange={handleChange}
							/>
						</Label>
					</div>

					<Label>
						<span>Scope Tags</span>
						<Textarea
							name='scopeTags'
							placeholder='Scope tags separated by commas, e.g.: ReFi,Web3'
							required
							onChange={handleChange}
						></Textarea>
					</Label>

					<Label>
						<span>Contributors</span>
						<Textarea
							name='contributors'
							placeholder='Addresses, names or pseudonyms of the contributors separated by commas, e.g.: 0xAddress1,John Doe,Rookiecol'
							required
							onChange={handleChange}
						></Textarea>
					</Label>
				</div>

				<div className='card-actions justify-center'>
					<button
						type='submit'
						className='btn btn-primary btn-wide border-none mb-5'
					>
						{isLoading ? (
							<Oval
								height={30}
								width={30}
								color='#fff'
								wrapperStyle={{}}
								wrapperClass=''
								visible={true}
								ariaLabel='oval-loading'
								secondaryColor='#fff'
								strokeWidth={2}
								strokeWidthSecondary={2}
							/>
						) : (
							'Create'
						)}
					</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	)
}

function createProjectArgsDtoToCreateProjectArgs(
	formValues: FormValuesTypes
): any[] {
	const {
		projectName,
		bannerImage,
		logo,
		description,
		link,
		amount,
		startDate,
		endDate,
		scopeTags,
		contributors
	} = formValues

	const amountBN: BigNumber = toDecimal(amount)
	const projectStartTime: number = new Date(startDate).getTime() / 1000
	const projectEndTime: number = new Date(endDate).getTime() / 1000
	const projectTime: number[] = [projectStartTime, projectEndTime]
	// TODO: Change this to the real evaluation time
	const evaluationTime: number = new Date('2024-01-01').getTime() / 1000
	const info: string = `${projectName},${bannerImage},${logo},${description},${link},${scopeTags},${contributors}`

	const args: any[] = [
		amountBN, // _amount
		projectStartTime, // _planning
		projectTime, // _projectTime
		evaluationTime, // _evaluationTime
		info // _info
	]

	return args
}
