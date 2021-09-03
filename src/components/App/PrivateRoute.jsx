import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectIsLogined } from 'redux/Auth/authSelectors';

export function PrivateRoute({ children, redirectTo = '/login', ...routeProps }) {
  const isLogined = useSelector(selectIsLogined);
  return <Route {...routeProps}>{isLogined ? children : <Redirect to={redirectTo} />}</Route>;
}
