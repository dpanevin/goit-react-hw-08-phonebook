import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAddContactMutation, useGetContactsQuery } from 'utils/pbApi';
import {
  AddForm,
  FormInput,
  AddFormLabel,
  SubmitBtn,
  HeadTitle,
  Section,
} from '../Phonebook.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  function handleChange(e) {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const contactNames = contacts.map(item => item.name);

    if (contactNames.includes(name)) {
      toast.error('Такое имя уже есть в списке контактов, придумайте новое имя.');
      return;
    }

    addContact({ name, number });

    setNumber('');
    setName('');
  }

  return (
    <Section>
      <HeadTitle>Книга контактов</HeadTitle>
      <AddForm onSubmit={handleSubmit}>
        <AddFormLabel>
          Имя
          <FormInput
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </AddFormLabel>
        <AddFormLabel>
          Телефон
          <FormInput
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </AddFormLabel>

        <SubmitBtn type="submit">Добавить контакт</SubmitBtn>
      </AddForm>
    </Section>
  );
}
