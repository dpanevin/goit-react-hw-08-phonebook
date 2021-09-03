import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { selectIsLogined } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import Welcoming from './Welcoming';
import BarLoader from 'react-spinners/BarLoader';
import { selectIsLoading } from 'redux/Loading/loadingSelectors';
import { css } from '@emotion/react';

const loaderStyle = css`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100vw;
`;

export default function Nav({ isFetchingCurrent }) {
  const isLogined = useSelector(selectIsLogined);
  const isFetching = useSelector(selectIsLoading);

  return (
    <>
      <nav className={styles.navigation}>
        <div className="mainNav">
          <NavLink
            className={styles.navigationLink}
            activeClassName={styles.navigationActiveLink}
            to="/"
            exact
          >
            Главная
          </NavLink>

          {isLogined && !isFetchingCurrent && (
            <NavLink
              className={styles.navigationLink}
              activeClassName={styles.navigationActiveLink}
              to="/contacts"
            >
              Контакты
            </NavLink>
          )}
        </div>

        {isLogined ? (
          <Welcoming />
        ) : (
          !isFetchingCurrent && (
            <div className="authNav">
              <NavLink
                className={styles.authLink}
                activeClassName={styles.authActiveLink}
                to="/register"
              >
                Регистрация
              </NavLink>

              <NavLink
                className={styles.authLink}
                activeClassName={styles.authActiveLink}
                to="/login"
              >
                Войти
              </NavLink>
            </div>
          )
        )}

        <BarLoader
          loading={isFetching}
          speedMultiplier="2"
          className={styles.loader}
          css={loaderStyle}
          color="#0070ff"
          height="4px"
        />
      </nav>
    </>
  );
}
