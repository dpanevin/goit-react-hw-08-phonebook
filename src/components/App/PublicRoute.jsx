import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectIsLogined } from 'redux/Auth/authSelectors';

export function PublicRoute({ children, restricted = false, redirectTo = '/', ...routeProps }) {
  const isLogined = useSelector(selectIsLogined);
  const isShow = isLogined && restricted;
  return <Route {...routeProps}>{isShow ? <Redirect to={redirectTo} /> : children}</Route>;
}
