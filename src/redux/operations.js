import * as actions from './actions'
import * as contactsShelfApi from './contactsShelfApi'

export const fetchContacts = () => async dispatch => {
	dispatch(actions.fetchContactsRequest())

try {
	const contacts = await contactsShelfApi.fetchContacts();
dispatch(actions.fetchContactsSuccess(contacts))
} catch (error) {
	dispatch(actions.fetchContactsError(error))
}
}