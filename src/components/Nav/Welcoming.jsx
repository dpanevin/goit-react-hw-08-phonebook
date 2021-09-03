import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/Auth/authSelectors';
import { FcApproval } from 'react-icons/fc';
import styles from './Nav.module.css';
import { useLogoutUserMutation } from 'utils/pbApi';
import { unsetUserData } from 'redux/Auth/authSlice';

export default function Welcoming() {
  const user = useSelector(selectCurrentUser);
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();

  async function onLogout() {
    await logoutUser();
    dispatch(unsetUserData());
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
