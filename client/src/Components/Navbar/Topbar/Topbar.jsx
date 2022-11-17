import React from 'react';
import { BsSearch, BsFilter } from 'react-icons/bs';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const styles = {
  navbar:
    'w-full fixed z-50 h-[68px] bg-[#1E2235] flex items-center justify-between px-4  md:px-[30px] text-white',
  logo: 'hidden md:flex text-2xl',
  form: 'relative w-[50%] flex justify-center items-center ',
  input: 'bg-[#252A41] rounded-2xl pl-[44px] py-2 w-full outline-none ',
  searchIcon: 'absolute top-3 left-4 text-[#ABADC6] ',
  filterIcon: 'ml-2',
  lastContainer: ' flex gap-[12px] ',
  login: 'px-[16px] py-[12px] bg-[#424867] rounded-2xl hidden md:flex ',
  register: ' px-[16px] py-[12px] bg-[#2563EB] rounded-2xl ',
  menuHamburg: 'text-[#ABADC6] cursor-pointer'
};
const TopNavbar = ({ handleOpenMenu }) => {
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
      <div className={styles.lastContainer}>
        <Link to="/login">
          <button className={styles.login}>Ingresar</button>
        </Link>
        <Link to="/register">
          <button className={styles.register}>Registarse</button>
        </Link>
      </div>
    </main>
  );
};

export default TopNavbar;
