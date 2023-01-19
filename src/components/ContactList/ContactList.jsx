import css from "../ContactList/ContactLIst.module.css"
import Contact from "components/Contact/Contact";

import { getContact, getFilter } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as operations from 'redux/operations'

const ContactList = () => {
const contact= useSelector(getContact);
const filter = useSelector(getFilter);
const dispatch = useDispatch();

const normalizedFilter = filter.toLowerCase();
const visibleContacts = contact.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

useEffect(() => {
dispatch(operations.fetchContacts())
}, [dispatch])

return (
	<ul className={css.contact__list}>{visibleContacts.map(contact => 
	<Contact 
	key={contact.id}
		contact={contact}
	/>
)}
</ul>
)
};

export default ContactList;