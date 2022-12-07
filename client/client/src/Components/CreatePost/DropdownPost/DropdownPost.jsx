import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function DropdownPost({ name, children }) {
  const [dropDown, setDropDown] = useState(false);

  const styles = {
    mainContainer:
      'flex w-full bg-[#424867] rounded-lg py-2 px-3 font-semibold tracking-wider items-center justify-between cursor-pointer capitalize ',
    dropDown: `p-4 text-white ${
      dropDown ? 'flex' : 'hidden'
    } flex-col gap-3 bg-[#424867]  rounded-xl font-semibold animate__animated animate__fadeIn capitalize`,
    span: 'flex items-center gap-2',
  };
  return (
    <>
      <div className={styles.mainContainer} onClick={() => setDropDown(!dropDown)}>
        {name}
        <span className={styles.span}>
          <MdKeyboardArrowDown size="1.5rem" />
        </span>
      </div>
      <div className={styles.dropDown}>{children}</div>
    </>
  );
}

export default DropdownPost;
