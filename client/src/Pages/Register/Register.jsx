import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../Redux/Actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';
import EmailError from '../../Components/Login/EmailError/EmailError';

function Login() {
  const [userData, setUserData] = useState({});
  const [passwordError, setPasswordError] = useState(false);
  const [message, setMessage] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const styles = {
    mainContainer: 'w-full h-[80vh] flex flex-col gap-8 justify-center items-center pt-48',
    logo: 'w-full text-[30px] text-white text-start font-semibold mb-10',
    form: 'flex flex-col gap-3 items-center w-full sm:w-[420px] px-6  relative',
    inputs: `w-full h-[44px] mt-2 border-2 bg-transparent rounded-xl px-3 outline-none text-[#ABADC6] border-[#424867]`,
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
    successMessage:
      ' py-2 px-6 border-4 border-green-400  bg-white rounded-lg text-green-800 text-lg absolute top-32 right-12 ',
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value.toLowerCase() });
  };
  const handleOnSubmit = (userData) => {
    userData.email = userData.email.toLowerCase();
    if (userData.password !== userData.repeatPassword) {
      setPasswordError(true);
    } else {
      dispatch(registerUser(userData));
      setPasswordError(false);
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
        navigate('/auth/login');
      }, [2000]);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className={styles.form} method="POST">
        <h1 className={styles.logo}>Registrarse</h1>
        {error && <EmailError />}
        <input
          type="text"
          className={styles.inputs}
          name="userName"
          placeholder="Ingrese su nombre de usuario"
          {...register('userName', {
            onChange: (e) => {
              handleChange(e);
            },
            required: true,
            maxLength: 15,
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
            required: true,
            minLength: 8,
          })}
        />
        {passwordError && (
          <p className={styles.passwordErrorText}>Las contraseñas deben ser iguales</p>
        )}

        <button className={styles.registerButton} type="submit">
          {loading ? (
            <ClipLoader
              color="#ffffff"
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <p>Registrarse</p>
          )}
        </button>

        <p className={styles.notRegister}>
          ¿Ya estas registrado?
          <Link to="/auth/login">
            <span className={styles.createAccount}>Ingresar</span>
          </Link>
        </p>
      </form>
      {message && (
        <div className={styles.successMessage}>
          <p>Cuenta creada correctamente</p>
        </div>
      )}
    </main>
  );
}

export default Login;
