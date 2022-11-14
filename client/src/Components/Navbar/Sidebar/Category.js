import React from 'react';
import { BsHouseDoor } from 'react-icons/bs';

const styles = {
  categories:
    'flex gap-2 items-center mt-2 pl-[19px] py-2 w-full bg-[#252A41] rounded-tl-xl rounded-bl-xl text-xl text-[#DCDEF3]',
  lists: `pl-[28%] text-[#9EA2C6]  flex ease-in duration-300 flex-col gap-2 py-2`,
  listItem: ':text-black'
};
function Category({ handleClick, elem }) {
  return (
    <>
      <div className={styles.categories} onClick={handleClick}>
        <BsHouseDoor />
        {elem.name}
      </div>
      <ul className={styles.lists}>
        {elem.elements.map((i) => (
          <li key={i} className={styles.listItem}>
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
