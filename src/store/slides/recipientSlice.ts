import { Recipient } from '@/models/recipient.model'
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface InitialState {
	recipient: Recipient
	recipientFetched: boolean
}

const initialState: InitialState = {
	recipient: {
		grantAmount: 0,
		metadata: {
			bio: '',
			email: '',
			fullname: '',
			image: '',
			organization: ''
		},
		milestonesReviewStatus: 0,
		recipientAddress: '',
		recipientStatus: 0,
		useRegistryAnchor: false
	},
	recipientFetched: false
}

export const recipientSlice: Slice<InitialState> = createSlice({
	name: 'recipient',
	initialState,
	reducers: {
		destroyRecipient: state => {
			state.recipient = initialState.recipient
			state.recipientFetched = initialState.recipientFetched
		},
		setRecipient: (state, action: PayloadAction<Recipient>) => {
			state.recipient = action.payload
		},
		setRecipientFetched: (state, action: PayloadAction<boolean>) => {
			state.recipientFetched = action.payload
		}
	}
})

export const { destroyRecipient, setRecipient, setRecipientFetched } =
	recipientSlice.actions

export default recipientSlice.reducer
