import React, { useState, useEffect } from 'react';
import Category from './Category';
import DownButtons from './DownButtons';
import { useGetCategoriesQuery } from '../../../Redux/Api/apiSlice';

function Sidebar({ menuPosition }) {
  const styles = {
    sideBar: `h-[85%] overflow-y-scroll   z-30 w-[223px] text-white bg-[#1E2235] flex flex-col items-start pl-[12px] py-[100px] font-semibold fixed ${menuPosition} transition-all duration-500 `,
  };
  const { data, isLoading, isFetching, isError } = useGetCategoriesQuery();
  console.log(data, isLoading, isFetching, isError);

  return (
    <main className={styles.sideBar}>
      {data && (
        <>
          <Category elem={data.data.categories} title="Categories" />
          <Category elem={data.data.programmingL} title="Lenguajes" />
          <Category elem={data.data.tags} title="Tags" />
        </>
      )}
      <DownButtons menuPosition={menuPosition} />
    </main>
  );
}

export default Sidebar;
