import React from 'react';
import { useState } from 'react';
import { BsSearch, BsFilter } from 'react-icons/bs';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import UserChange from './UserMenu/UserChange';
import UserMenu from './UserMenu/UserMenu';
import UserPhotoNavbar from './UserMenu/UserPhotoNavbar';
const styles = {
  navbar:
    'w-full fixed z-50 h-[68px] bg-[#1E2235] flex items-center justify-between px-4  md:px-[30px] text-white',
  logo: 'hidden md:flex text-2xl shadow-2xl',
  form: 'relative w-[50%] flex justify-center items-center ',
  input: 'bg-[#252A41] rounded-2xl pl-[44px] py-2 w-full outline-none ',
  searchIcon: 'absolute top-3 left-4 text-[#ABADC6] ',
  filterIcon: 'ml-2',
  lastContainer: ' flex gap-[12px] ',
  login:
    'px-[16px] py-[12px] bg-[#424867] rounded-2xl hidden md:flex hover:bg-[#303650] focus:border-2 focus:border-white focus:px-[14px] focus:py-[10px] ',
  register:
    'px-[16px] py-[12px] bg-[#2563EB] rounded-2xl hover:bg-[#1E40AF] focus:border-2 focus:border-white focus:px-[13px] focus:py-[10px] ',
  menuHamburg: 'text-[#ABADC6] cursor-pointer',
};

const TopNavbar = ({ handleOpenMenu }) => {
  const user = true;
  const [userMenu, setUserMenu] = useState(false);
  const [selectedChange, setSelectedChange] = useState(null);
  const [userChange, setUserChange] = useState(false);

  const handleUserProfile = () => {
    setUserMenu(!userMenu);
  };
  const handleGoBack = () => {
    setUserChange(false);
  };
  const handleCloseAll = () => {
    setUserMenu(false);
    setUserChange(false);
  };
  return (
    <main className={styles.navbar}>
      <HiMenuAlt1 className={styles.menuHamburg} size="1.5rem" onClick={handleOpenMenu} />
      <Link to="/">
        <div className={styles.logo}>Logo</div>
      </Link>
      <form className={styles.form}>
        <BsSearch className={styles.searchIcon} size="1.1rem" />
        <input className={styles.input} type="text" placeholder="Buscar" />
        <BsFilter className={styles.filterIcon} size="1.8rem" />
      </form>
      {user ? (
        <UserPhotoNavbar handleUserProfile={handleUserProfile} />
      ) : (
        <div className={styles.lastContainer}>
          <Link to="/login">
            <button className={styles.login}>Ingresar</button>
          </Link>
          <Link to="/register">
            <button className={styles.register}>Registarse</button>
          </Link>
        </div>
      )}
      {user && userMenu ? <UserMenu onClick={() => setUserChange(true)} /> : null}
      {userChange && <UserChange handleCloseAll={handleCloseAll} handleGoBack={handleGoBack} />}
    </main>
  );
};

export default TopNavbar;
