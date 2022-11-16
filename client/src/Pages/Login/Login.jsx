import React from 'react';
import { Link } from 'react-router-dom';
const styles = {
  mainContainer: 'w-full h-screen flex flex-col gap-8 justify-center items-center',
  logo: '',
  form: 'flex flex-col gap-5 items-center w-[300px]',
  inputs:
    'w-full h-[44px] border-2 border-[#424867] bg-transparent rounded-xl px-3 outline-none text-[#ABADC6] ',
  forgotPassword: 'text-[#2563EB] text-sm w-full text-end font-semibold',
  loginButton: 'w-full py-2 text-center rounded-xl bg-[#2563EB] text-white font-semibold',
  linesDiv: 'flex w-full justify-center items-center gap-2 text-[#ABADC6] font-semibold text-sm',
  lines: ' h-[1px] bg-[#252A41] w-full ',
  logWithGoogle:
    'w-full flex justify-center gap-6 border-2 border-[#424867] text-[#ABADC6] py-2 rounded-xl text-sm font-semibold',
  googleImage: 'w-5',
  notRegister: 'text-[#ABADC6]',
  createAccount: 'text-[#2563EB] font-semibold ml-2 text-sm'
};
function Login() {
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.logo}>Logo</h1>
      <form action="" className={styles.form}>
        <input type="text" className={styles.inputs} placeholder="Email" />
        <input type="text" className={styles.inputs} placeholder="Contraseña" />
        <p className={styles.forgotPassword}>Olvidé mi contraseña</p>
        <button className={styles.loginButton}>Ingresar</button>
        <div className={styles.linesDiv}>
          <span className={styles.lines}></span>
          <p>O</p>
          <span className={styles.lines}></span>
        </div>
        <button className={styles.logWithGoogle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google image"
            className={styles.googleImage}
          />
          Ingresar con Google
        </button>
        <p className={styles.notRegister}>
          ¿No estás registrado?
          <Link to="/register">
            <span className={styles.createAccount}>Crear una cuenta</span>
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
