import axios from "axios";

axios.defaults.baseURL = 'https://63c4138ca908563575310e51.mockapi.io';

export async function fetchContacts() {
	const {data} = await axios.get('/contacts')
	return data;
}

export async function fetchContactsId(id) {
	const {data} = await axios.get(`/contacts/${id}`)
	return data;
}