import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./operations";
// const contactsInitialState = [
// 	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const handlePending = state => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payoad;
};

const contactsSlise = createSlice({
	name: "contacts",
	initialState: {
		contacts: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[fetchContacts.pending]: handlePending,
	[fetchContacts.fulfilled]: (state, action) {
		state.isLoading = false;
		state.error = null;
		state.contacts = action.payload;
	},
	}
})