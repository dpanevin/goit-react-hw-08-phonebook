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
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserData } from 'redux/Auth/authSlice';
import { useLoginUserMutation } from 'utils/pbApi';

const initialUserState = {
  email: '',
  password: '',
};

export default function Register() {
  const [user, setUser] = useState(initialUserState);
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const resp = await loginUser(user);
    const userData = resp.data;
    setUser(initialUserState);
    await dispatch(setUserData(userData));
  }

  return (
    <Section>
      <HeadTitle>Авторизация</HeadTitle>

      <AuthForm autoComplete="off" onSubmit={onSubmit}>
        <AuthFormLabel>
          Email
          <FormInput onChange={handleChange} type="email" name="email" required />
        </AuthFormLabel>
        <AuthFormLabel>
          Пароль
          <FormInput onChange={handleChange} type="password" name="password" required />
        </AuthFormLabel>

        <SubmitBtn type="submit">Войти</SubmitBtn>
      </AuthForm>

      <AuthInfo>
        Если у Вас нет аккаунта,{' '}
        <Link to="/register" style={{ color: 'white' }}>
          Зарегистрируйтесь
        </Link>
        .
      </AuthInfo>
    </Section>
  );
}
