import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';

export default function Phonebook() {
  return (
    <>
      <ContactForm />

      <ContactsList />
      <Toaster position="top-right" />
    </>
  );
}
