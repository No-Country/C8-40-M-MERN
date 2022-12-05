import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../Redux/Actions/userActions';
import EmailError from '../../Components/Login/EmailError/EmailError';
import ClipLoader from 'react-spinners/ClipLoader';
import { login } from '../../Redux/Slices/userSlice';

function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const styles = {
    mainContainer: 'w-full h-[80vh] flex flex-col gap-8 justify-center items-center pt-40',
    logo: 'w-full text-[30px] text-white text-start font-semibold mb-10',
    form: 'flex flex-col gap-6 items-center w-full sm:w-[420px] px-6 relative',
    inputs: `w-full h-[44px] border-2 bg-transparent rounded-xl px-3 outline-none text-[#ABADC6] border-[#424867]`,
    errorInput: `w-full h-[44px] border-2 bg-transparent rounded-xl px-3 outline-none text-[#ABADC6]
     border-[#EF4444]`,
    forgotPassword: 'text-[#2563EB] text-sm w-full text-end font-semibold mt-4',
    loginButton:
      'w-full h-[44px] py-2 text-center rounded-xl bg-[#2563EB] text-white font-semibold',
    linesDiv: 'flex w-full justify-center items-center gap-2 text-[#ABADC6] font-semibold text-sm',
    lines: ' h-[1px] bg-[#252A41] w-full ',
    logWithGoogle:
      'w-full h-[44px] flex justify-center gap-6 border-2 border-[#424867] text-[#ABADC6] py-2 rounded-xl text-sm font-semibold',
    googleImage: 'w-5',
    notRegister: 'text-[#ABADC6]',
    createAccount: 'text-[#2563EB] font-semibold ml-2 text-sm',
    passwordErrorText: 'text-sm text-[#EF4444] absolute bottom-64 left-6',
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    dispatch(userLogin(data));
  };

  return (
    <main className={styles.mainContainer}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className={styles.form}>
        <h1 className={styles.logo}>Ingresar</h1>
        {errors.email?.type === 'required' && <EmailError />}
        <input
          type="email"
          className={styles.inputs}
          name="email"
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
          className={errors.password?.type === 'minLength' ? styles.errorInput : styles.inputs}
          name="password"
          placeholder="Ingrese su contraseña"
          {...register('password', {
            onChange: (e) => {
              handleChange(e);
            },
            required: true,
            minLength: 8,
          })}
        />
        {errors.password?.type === 'minLength' && (
          <p className={styles.passwordErrorText}>
            La contraseña debería tener minimo 8 caracteres
          </p>
        )}
        {errors.password?.type === 'required' && (
          <p className={styles.passwordErrorText}>Es necesario ingresar una contraseña</p>
        )}
        <p className={styles.forgotPassword}>Olvidé mi contraseña</p>
        <button className={styles.loginButton} type="submit">
          {loading ? (
            <ClipLoader
              color="#ffffff"
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <p>Ingresar</p>
          )}
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
