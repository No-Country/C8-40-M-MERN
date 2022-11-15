import React from 'react';
import sideBar from '../../../Utils/sidebar.json';
import Category from './Category';
import DownButtons from './DownButtons';
function Sidebar({ menuPosition }) {
  const styles = {
    sideBar: `min-h-screen z-30 w-[223px] text-white bg-[#1E2235] flex flex-col items-start pl-[12px] py-[100px] font-semibold fixed ${menuPosition} transition-all duration-500 `,
    categories:
      'flex gap-2 items-center mt-2 pl-[19px] py-2 w-full bg-[#252A41] rounded-tl-xl rounded-bl-xl text-xl text-[#DCDEF3]'
  };

  return (
    <main className={styles.sideBar}>
      {sideBar.map((elem) => (
        <Category key={elem.id} elem={elem} />
      ))}
      <DownButtons menuPosition={menuPosition} />
    </main>
  );
}

export default Sidebar;
