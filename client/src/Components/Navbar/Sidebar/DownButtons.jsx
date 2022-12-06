import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function DownButtons({ menuPosition }) {
  const styles = {
    mainContainer: `fixed bottom-0 left-0 ${menuPosition} transition-all duration-500 flex-col pl-4 text-[#ABADC6] w-[80%] z-50 w-[222px] pb-6 pt-4 bg-[#1E2235]`,
    container: 'flex gap-2 items-center mt-4',
    languageImg: 'w-6 h-6 rounded-[50%]',
    createPostButton: 'hidden md:flex bg-[#2563EB] text-white py-1.5 px-3 rounded-lg mt-3 ',
  };
  const token = localStorage.getItem('token');

  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png"
          alt="language"
          className={styles.languageImg}
        />
        <p>Español</p>
      </div>
      {token ? (
        <Link to="/create-post">
          <button className={styles.createPostButton}>Crear Post</button>
        </Link>
      ) : (
        <div className={styles.container}>
          <FiLogOut size="1.5rem" />
          <Link to="/auth/login">
            <p>Iniciar sesión</p>
          </Link>
        </div>
      )}
    </main>
  );
}

export default DownButtons;
