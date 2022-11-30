import React from 'react';

const styles = {
  mainContainer:
    'absolute right-16 top-16 w-[231px] h-[146px] flex flex-col gap-2 bg-[#1E2235] p-2 rounded-lg drop-shadow-xl text-[#DCDEF3] text-[16px] ',
  line: 'w-full h-[1px] bg-[#DCDEF3] ',
  profile: 'text-white',
};
function UserMenu({ onClick }) {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.profile}>Perfil</h2>
      <div className={styles.line}></div>
      <h3 onClick={onClick} className="cursor-pointer">
        Cambiar nombre de usuario
      </h3>
      <h3 onClick={onClick} className="cursor-pointer">
        Cambiar contraseña
      </h3>
      <h3 onClick={onClick} className="cursor-pointer">
        Cambiar profesión
      </h3>
    </div>
  );
}

export default UserMenu;
