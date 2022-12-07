import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../Redux/Slices/userSlice';
import { useDispatch } from 'react-redux';
const styles = {
  mainContainer:
    'absolute right-16 top-16 w-[231px] h-[185px] flex flex-col gap-2 bg-[#1E2235] p-2 rounded-lg drop-shadow-xl text-[#DCDEF3] text-[16px] ',
  line: 'w-full h-[1px] bg-[#DCDEF3] ',
  profile: 'text-white',
  option: 'cursor-pointer',
};
function UserMenu({ onClick, handleClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth/login');
    handleClose();
  };
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.profile}>Perfil</h2>
      <div className={styles.line}></div>
      <h3 onClick={onClick} className={styles.option}>
        Cambiar nombre de usuario
      </h3>
      <h3 onClick={onClick} className={styles.option}>
        Cambiar contraseña
      </h3>
      <h3 onClick={onClick} className={styles.option}>
        Cambiar profesión
      </h3>
      <h3 onClick={handleLogout} className={styles.option}>
        Cerrar Sesión
      </h3>
    </div>
  );
}

export default UserMenu;
