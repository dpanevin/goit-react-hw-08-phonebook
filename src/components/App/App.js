import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser, selectToken } from 'redux/Auth/authSelectors';
import { lazy, useEffect } from 'react';
import authOperations from 'redux/Auth/authOperation';
const HomePage = lazy(() => import('components/Home/Home' /* webpackChunkName: 'HomePage' */));
const Nav = lazy(() => import('components/Nav/Nav' /* webpackChunkName: 'Nav' */));
const Phonebook = lazy(() =>
  import('components/Phonebook/Phonebook' /* webpackChunkName: 'Phonebook' */),
);
const Login = lazy(() => import('components/Authorization/Login' /* webpackChunkName: 'Login' */));
const Register = lazy(() =>
  import('components/Authorization/Register' /* webpackChunkName: 'Register' */),
);

export function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    token && dispatch(authOperations.getUser());
  }, [dispatch, token]);

  return (
    <>
      <Nav isFetchingCurrent={isFetchingCurrent} />

      {!isFetchingCurrent && (
        <Switch>
          <PublicRoute path="/" exact>
            <HomePage />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <Phonebook />
          </PrivateRoute>
          <PublicRoute restricted redirectTo="/contacts" path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute restricted path="/register">
            <Register />
          </PublicRoute>
        </Switch>
      )}
    </>
  );
}
