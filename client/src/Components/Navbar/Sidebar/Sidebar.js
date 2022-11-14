import React, { useState } from 'react';
import sideBar from '../../../Utils/sidebar.json';
import Category from './Category';
function Sidebar() {
  const [categories, setCategories] = useState(false);

  const styles = {
    sideBar:
      '  h-screen w-[223px] text-white bg-[#1E2235] flex flex-col items-start pl-[12px] pt-[100px] font-semibold ',
    categories:
      'flex gap-2 items-center mt-2 pl-[19px] py-2 w-full bg-[#252A41] rounded-tl-xl rounded-bl-xl text-xl text-[#DCDEF3]'
  };

  return (
    <main className={styles.sideBar}>
      {sideBar.map((elem) => (
        <Category key={elem.id} handleClick={() => setCategories(!categories)} elem={elem} />
      ))}
    </main>
  );
}

export default Sidebar;
