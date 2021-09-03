import { useState } from 'react';
import { useDeleteContactMutation, useGetContactsQuery } from 'utils/pbApi';
import Filter from './Filter/Filter';
import { ContactsListItem, DeleteBtn, Section } from '../Phonebook.styled';

export default function ContactsList() {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [filter, setFilter] = useState('');

  const filteredContacts =
    contacts &&
    contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter);
    });

  function onClicked(e) {
    deleteContact(e.target.id);
  }

  function onFilterChange(value) {
    setFilter(value);
  }

  return (
    <Section>
      <h2>Contacts</h2>

      <Filter value={filter} setFilter={onFilterChange} />

      <ul>
        {filteredContacts &&
          filteredContacts.map(({ name, number, id }) => {
            return (
              <ContactsListItem key={id}>
                {name}: {number}
                <DeleteBtn id={id} onClick={onClicked}>
                  Удалить
                </DeleteBtn>
              </ContactsListItem>
            );
          })}
      </ul>
    </Section>
  );
}
