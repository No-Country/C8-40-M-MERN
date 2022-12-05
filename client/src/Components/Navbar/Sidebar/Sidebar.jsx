import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

import Category from './Category';
import DownButtons from './DownButtons';
import { useGetCategoriesQuery } from '../../../Redux/Api/apiSlice';

function Sidebar({ menuPosition }) {
  const styles = {
    sideBar: `h-full overflow-y-scroll z-30 w-[223px] text-white bg-[#1E2235] flex flex-col items-start py-[100px] font-semibold fixed ${menuPosition} transition-all duration-500 `,
  };
  const { data } = useGetCategoriesQuery();

  return (
    <main className={styles.sideBar}>
      {data ? (
        <>
          <Category elem={data.data.categories} title="Categories" />
          <Category elem={data.data.programmingL} title="Lenguajes" />
        </>
      ) : (
        <GridLoader
          color="#b5b5b5"
          margin={30}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <DownButtons menuPosition={menuPosition} />
    </main>
  );
}

export default Sidebar;
