import Contact from './Contact';

import { useSelector } from 'react-redux';
import { getContacts, getValue } from 'redux/selectors';

// import css from '../Form/Form.module.css';


const filterContacts = (items, value) => {
  const lowCaseFilter = value.toLowerCase();
  return items.filter(el => el.name.toLowerCase().includes(lowCaseFilter));
};

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getValue);

  const filteredContacts = filterContacts(contacts, value);

  return (
    <ul >
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};