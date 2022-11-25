import React, { useState, useEffect } from 'react';
import Category from './Category';
import DownButtons from './DownButtons';
function Sidebar({ menuPosition }) {
  const [sideBarData, setSideBarData] = useState(null);
  const styles = {
    sideBar: `h-[85%] overflow-y-scroll   z-30 w-[223px] text-white bg-[#1E2235] flex flex-col items-start pl-[12px] py-[100px] font-semibold fixed ${menuPosition} transition-all duration-500 `,
  };
  useEffect(() => {
    fetch('https://c8-40-m-mern-kappa.vercel.app/api/sidebar')
      .then((res) => res.json())
      .then((data) => setSideBarData(data.data));
  }, []);

  return (
    <main className={styles.sideBar}>
      {sideBarData && (
        <>
          <Category elem={sideBarData.categories} title="Categories" />
          <Category elem={sideBarData.programmingL} title="Lenguajes" />
        </>
      )}
      <DownButtons menuPosition={menuPosition} />
    </main>
  );
}

export default Sidebar;
