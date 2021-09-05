import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/Auth/authSelectors';
import { FcApproval } from 'react-icons/fc';
import styles from './Nav.module.css';
import authOperations from 'redux/Auth/authOperation';

export default function Welcoming() {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(authOperations.logoutUser());
  }

  return (
    <div className={styles.welcoming}>
      <FcApproval className={styles.welcomingIcon} />
      <p> Приветствую, {user}!</p>
      <button onClick={onLogout} className={styles.logoutBtn} type="button">
        Выйти
      </button>
    </div>
  );
}
