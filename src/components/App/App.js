import HomePage from 'components/Home/Home';
import Nav from 'components/Nav/Nav';
import Phonebook from 'components/Phonebook/Phonebook';
import Login from 'components/Authorization/Login';
import Register from 'components/Authorization/Register';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser, selectToken } from 'redux/Auth/authSelectors';
import { useEffect } from 'react';
import authOperations from 'redux/Auth/authOperation';

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
