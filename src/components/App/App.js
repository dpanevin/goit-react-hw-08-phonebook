import HomePage from 'components/Home/Home';
import Nav from 'components/Nav/Nav';
import Phonebook from 'components/Phonebook/Phonebook';
import Login from 'components/Authorization/Login';
import Register from 'components/Authorization/Register';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch } from 'react-redux';
import { useGetUserQuery } from 'utils/pbApi';
import { useEffect } from 'react';
import { setUserData } from 'redux/Auth/authSlice';

export function App() {
  const { data, isLoading } = useGetUserQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    data && dispatch(setUserData(data));
  }, [data, dispatch]);

  return (
    <>
      <Nav isFetchingCurrent={isLoading} />
      {!isLoading && (
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
