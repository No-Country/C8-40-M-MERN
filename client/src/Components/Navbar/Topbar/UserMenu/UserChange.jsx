import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
function UserChange({ profileTitle, handleGoBack, handleCloseAll }) {
  const styles = {
    mainContainer:
      'absolute top-14 right-8 w-[348px] h-[550px] bg-[#1E2235] drop-shadow-xl p-3 text-[#DCDEF3]',
    buttons: 'w-full flex justify-between items-center text-lg',
    goBack: 'flex items-center gap-2 cursor-pointer',
    profileTitle: 'mt-2 text-white border-b-2 border-white pb-3 text-lg font-semibold ',
    closeCross: 'cursor-pointer',
    form: 'flex flex-col mt-4 gap-4 text-[#DCDEF3] text-sm ',
    input: 'py-3 px-4 rounded-xl bg-transparent outline-none border-2 border-[#424867] ',
    button:
      'bg-[#2563EB] w-[141px] h-[44px] rounded-xl text-white text-md font-semibold tracking-wide ml-[55%] ',
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.buttons}>
        <span className={styles.goBack} onClick={handleGoBack}>
          <BiArrowBack size="1.5rem" />
          <p>Volver</p>
        </span>
        <AiOutlineCloseCircle
          size="1.5rem"
          onClick={handleCloseAll}
          className={styles.closeCross}
        />
      </div>
      <div className={styles.profileTitle}>
        <h1>Perfil - {profileTitle}</h1>
      </div>
      <form action="" className={styles.form}>
        <label htmlFor="firstInput">Nuevo nombre de usuario</label>
        <input
          type="text"
          name="firstInput"
          placeholder="Ingrese su nuevo nombre de usuario"
          className={styles.input}
        />
        <label htmlFor="secondInput">Ingrese su contraseña</label>
        <input
          type="text"
          name="secondInput"
          placeholder="Confirme con su contraseña"
          className={styles.input}
        />
        <button className={styles.button}>Aplicar cambios</button>
      </form>
    </main>
  );
}

export default UserChange;
