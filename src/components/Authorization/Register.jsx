import {
  AuthForm,
  AuthFormLabel,
  AuthInfo,
  FormInput,
  HeadTitle,
  Section,
  SubmitBtn,
} from 'components/Authorization/Auth.styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserMutation } from 'utils/pbApi';

const initialUserState = {
  name: '',
  email: '',
  password: '',
};

export default function Register() {
  const [user, setUser] = useState(initialUserState);
  const [createUser] = useCreateUserMutation();

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();

    createUser(user);
    setUser(initialUserState);
  }

  return (
    <Section>
      <HeadTitle>Регистрация</HeadTitle>

      <AuthForm onSubmit={onSubmit} autoComplete="off">
        <AuthFormLabel>
          Имя
          <FormInput
            value={user.name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </AuthFormLabel>
        <AuthFormLabel>
          Email
          <FormInput
            value={user.email}
            onChange={handleChange}
            type="email"
            name="email"
            title="Email можно придумать самому, никакой проверки на почту отправлятся не будет"
            required
          />
        </AuthFormLabel>
        <AuthFormLabel>
          Пароль
          <FormInput
            value={user.password}
            onChange={handleChange}
            type="password"
            name="password"
            minlength="5"
            maxlength="12"
            required
          />
        </AuthFormLabel>

        <SubmitBtn type="submit">Регистрация</SubmitBtn>

        <AuthInfo>
          Если у Вас есть аккаунт,{' '}
          <Link to="/login" style={{ color: 'white' }}>
            Войдите
          </Link>
          .
        </AuthInfo>
      </AuthForm>
    </Section>
  );
}
