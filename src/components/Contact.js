import React from 'react';
import { useDispatch } from 'react-redux';

// import css from '../components/Form/Form.module.css';
// import { deleteContact } from 'redux/actions';
import { deleteContact } from '../redux/contactSlice'
import { DeleteButton, FilterBlock } from './Layout.js';



const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handlerDeleteContact = () => dispatch(deleteContact(id));

  return (
    <label >
      <FilterBlock>
        <span>{name}: </span>
        <span>{number}</span>
      </FilterBlock>

      <DeleteButton  onClick={handlerDeleteContact}>
        Delete
      </DeleteButton>
    </label>
  );
};

export default Contact;

