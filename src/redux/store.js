import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
	reducer: {
		contacts: contactSlice,
		filter: filterReducer
	}
})