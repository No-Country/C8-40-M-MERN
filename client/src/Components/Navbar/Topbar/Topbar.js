import React from 'react';
import { BsSearch, BsFilter } from 'react-icons/bs';
const styles = {
  navbar:
    'w-full fixed z-50 h-[68px] bg-[#1E2235] flex items-center justify-between px-[30px] text-white',
  logo: 'text-2xl',
  form: 'relative w-[50%] flex justify-center items-center ',
  input: 'bg-[#252A41] rounded-2xl pl-[44px] py-2 w-full outline-none ',
  searchIcon: 'absolute top-3 left-4 text-[#ABADC6] ',
  filterIcon: 'ml-2',
  lastContainer: ' flex gap-[12px] ',
  login: 'px-[16px] py-[12px] bg-[#424867] rounded-2xl ',
  register: ' px-[16px] py-[12px] bg-[#2563EB] rounded-2xl '
};
const Navbar = () => {
  return (
    <main className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <form className={styles.form}>
        <BsSearch className={styles.searchIcon} size="1.1rem" />
        <input className={styles.input} type="text" placeholder="Buscar" />
        <BsFilter className={styles.filterIcon} size="1.8rem" />
      </form>
      <div className={styles.lastContainer}>
        <button className={styles.login}>Ingresar</button>
        <button className={styles.register}>Registarse</button>
      </div>
    </main>
  );
};

export default Navbar;
