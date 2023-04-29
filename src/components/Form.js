import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { getContacts } from '../redux/selectors';

import { toast } from 'react-toastify';
import {PhonebookFrame, InputStyle,InputStyletext,PhonebookSectionletter, AddButton } from './Layout.js';



export const Form = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const findSameName = contacts.some(el => el.name?.includes(name));
    if (findSameName) {
      e.target.reset();
      return toast.error(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    e.target.reset();
  };

  return (
    <PhonebookFrame>
      <form onSubmit={handleSubmit}>
      <label >
          <PhonebookSectionletter>{'Name'}</PhonebookSectionletter>
          <InputStyle>
               <InputStyletext
              type="text" 
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
          </InputStyle>

        <PhonebookSectionletter>{'Number'}</PhonebookSectionletter>
          <InputStyle>
                 <InputStyletext
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
  
          </InputStyle>
   
   </label>
      <AddButton button type="submit" >
        Add contact
      </AddButton>
    </form>
    </PhonebookFrame>

  );
};
