import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from './Form';
import { FilterContact } from './FilterContact';
import { ContactsList } from './ContactsList';

import { Layout, Sectionletter, Headerletter } from './Layout.js';

// import css from './Form/Form.module.css';

export const App = () => {
  return (
    <Layout >
      < Headerletter>Phone book</ Headerletter>
      <Form />
      <Sectionletter>Contacts</Sectionletter>
      <div >
        <FilterContact />
        <ContactsList />
      </div>
      <ToastContainer />
    </Layout>
  );
};