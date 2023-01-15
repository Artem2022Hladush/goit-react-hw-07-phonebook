// import { createSlice, nanoid } from "@reduxjs/toolkit";
import { createReducer, combineReducers, createAction } from "@reduxjs/toolkit";
import * as actions from './actions'

// const contactsInitialState = [
// 	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const entities = createReducer([], {
	[actions.fetchContactsSuccess]: (_, action) => action.payload
})

const isLoading = createReducer(false, {
	[actions.fetchContactsRequest]: () => true,
	[actions.fetchContactsSuccess]: () => false,
	[actions.fetchContactsError]: () => false,
})

const error = createReducer(null, {
	[actions.fetchContactsError]: (_, action) => action.payload,
	[actions.fetchContactsRequest]: () => null,
})

export default combineReducers({
	entities,
	isLoading,
	error
})