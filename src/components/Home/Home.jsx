import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLogined } from 'redux/Auth/authSelectors';
import { HeadTitle, Section, WelcomeMessage, ListTitle, ListItem, AuthInfo } from './Home.styled';

export default function HomePage() {
  const isLogined = useSelector(selectIsLogined);

  return (
    <Section>
      <HeadTitle>Книга контактов</HeadTitle>
      <WelcomeMessage>
        Рад приветствовать Вас в моем приложении для хранения контактов!
      </WelcomeMessage>
      <ListTitle>Данное приложение пережило 6 стадий модернизации:</ListTitle>
      <ul>
        <ListItem>
          1. Первая версия приложения была написана используя React-классы и LocalStorage клиента
        </ListItem>
        <ListItem>2. Приложение было перенесено на React-хуки</ListItem>
        <ListItem>
          3. State приложения был организован используя библиотеку Redux и Redux-Persist
        </ListItem>
        <ListItem>
          4. Управление состоянием приложения было реорганизовано используя Redux-Toolkit и
          Redux-хуки
        </ListItem>
        <ListItem>5. База данных переехала на локальный JSON-Server</ListItem>
        <ListItem>
          6. У послдней версии приложения появилась база данных на хостинге, обмен контактами
          реализирован используя RTK Query, добвлена регистрация и авторизация пользоателя используя
          Redux-Thunk
        </ListItem>
      </ul>

      {!isLogined && (
        <>
          <AuthInfo>
            Если у Вас нет аккаунта,{' '}
            <Link to="/register" style={{ color: 'white' }}>
              Зарегистрируйтесь.
            </Link>
          </AuthInfo>
          <AuthInfo>
            Если у Вас есть аккаунт,{' '}
            <Link to="/login" style={{ color: 'white' }}>
              Войдите
            </Link>
            .
          </AuthInfo>
        </>
      )}
    </Section>
  );
}
