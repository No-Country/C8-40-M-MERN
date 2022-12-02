import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import EmailError from '../../Components/Login/EmailError/EmailError';

function Login() {
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const styles = {
    mainContainer: 'w-full h-[80vh] flex flex-col gap-8 justify-center items-center pt-48',
    logo: 'w-full text-[30px] text-white text-start font-semibold mb-10',
    form: 'flex flex-col gap-3 items-center w-full sm:w-[420px] px-6 relative',
    inputs: `w-full h-[44px] border-2 bg-transparent rounded-xl px-3 outline-none text-[#ABADC6] border-[#424867]`,
    errorInput: `w-full h-[44px] border-2 bg-transparent rounded-xl px-3 outline-none text-[#ABADC6]
     border-[#EF4444]`,
    registerButton:
      'w-full h-[59px] py-2 text-center rounded-xl bg-[#2563EB] text-white font-semibold',
    linesDiv: 'flex w-full justify-center items-center gap-2 text-[#ABADC6] font-semibold text-sm',
    lines: ' h-[1px] bg-[#252A41] w-full ',
    logWithGoogle:
      'w-full h-[59px] flex justify-center items-center gap-6 border-2 border-[#424867] text-[#ABADC6] py-2 rounded-xl text-sm font-semibold',
    googleImage: 'w-5',
    notRegister: 'text-[#ABADC6]',
    createAccount: 'text-[#2563EB] font-semibold ml-2 text-sm',
    passwordErrorText: 'text-sm text-[#EF4444] flex justify-start w-full pl-3',
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className={styles.mainContainer}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className={styles.form}>
        <h1 className={styles.logo}>Registrarse</h1>
        {errors.email?.type === 'required' && <EmailError />}
        <input
          type="text"
          className={styles.inputs}
          name="user"
          placeholder="Ingrese su nombre de usuario"
          {...register('user', {
            onChange: (e) => {
              handleChange(e);
            },
            required: true,
          })}
        />
        <input
          type="email"
          name="email"
          className={styles.inputs}
          placeholder="Ingrese su email"
          {...register('email', {
            onChange: (e) => {
              handleChange(e);
            },
            required: true,
          })}
        />
        <input
          type="password"
          name="password"
          className={errors.password?.type === 'minLength' ? styles.errorInput : styles.inputs}
          placeholder="Ingrese su contraseña"
          {...register('password', {
            onChange: (e) => {
              handleChange(e);
            },
            required: true,
            minLength: 8,
          })}
        />
        {errors.password?.type === 'required' && (
          <p className={styles.passwordErrorText}>Es necesario ingresar una contraseña</p>
        )}
        {errors.password?.type === 'minLength' && (
          <p className={styles.passwordErrorText}>
            La contraseña debería tener minimo 8 caracteres
          </p>
        )}
        <input
          type="password"
          name="confirmPassword"
          className={errors.password?.type === 'minLength' ? styles.errorInput : styles.inputs}
          placeholder="Repita su contraseña"
          {...register('repeatPassword', {
            onChange: (e) => {
              handleChange(e);
            },
            required: true,
            minLength: 8,
          })}
        />
        {errors.repeatPassword?.type === 'minLength' && (
          <p className={styles.passwordErrorText}>Las contraseñas deben ser iguales</p>
        )}

        <button className={styles.registerButton} type="submit">
          Registrarse
        </button>

        <div className={styles.linesDiv}>
          <span className={styles.lines}></span>
          <p>O</p>
          <span className={styles.lines}></span>
        </div>
        <button className={styles.logWithGoogle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google"
            className={styles.googleImage}
          />
          Registrarse con Google
        </button>
        <p className={styles.notRegister}>
          ¿Ya estas registrado?
          <Link to="/login">
            <span className={styles.createAccount}>Ingresar</span>
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
