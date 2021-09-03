import { FormInput, Section } from '../../Phonebook.styled';

export default function Filter({ value, setFilter }) {
  function hendleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <Section>
      <label>
        Поиск по списку контактов:
        <FormInput
          onChange={hendleChange}
          value={value}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Фильтр"
          required
        />
      </label>
    </Section>
  );
}
