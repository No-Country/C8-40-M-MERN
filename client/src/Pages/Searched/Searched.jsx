import React, { useState, useEffect } from 'react';
import AllCards from '../../Components/Cards/AllCards';
import { useGetAllPostsQuery } from '../../Redux/Api/apiSlice';
import { useParams } from 'react-router-dom';

const styles = {
  mainContainer: 'pt-[80px] md:pl-[17%] md:pr-6 w-full ',
  categoryTitle: 'text-4xl text-white',
  buttonSection: 'w-full flex justify-between gap-4 mt-6',
  filterButtons: 'w-full py-2 bg-gray-300',
  tagsContainer: 'w-full flex flex-wrap justify-evenly gap-4 mt-6',
  tagsButton:
    ' py-1 w-24 flex justify-center max-h-8 text-center overflow-hidden px-6 rounded-2xl bg-gray-500',
  container: 'hidden md:flex md:flex-col w-full',
  containerM: ' md:hidden',
};

const cat = {
  frontend: ['react', 'redux', 'angular', 'vue', 'svelte'],
  backend: ['node', 'sequelize', 'nest', 'express', 'mongoose', 'django'],
  qa: ['cypress', 'selenium', 'gatling', 'invicti', 'lambdatest'],
};

function Searched() {
  const { data, isLoading, isFetching, isError } = useGetAllPostsQuery();

  const [searched, setSearched] = useState([]);
  const { techlan } = useParams();

  useEffect(() => {
    setSearched(data?.data.docs.filter((e) => e.technology?.id === techlan));
  }, [techlan]);
  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        {searched ? <AllCards data={searched} tech={techlan} /> : <></>}
      </div>
      {/* <div className={styles.containerM}>
        <AllCards data={catFilter} tech={e} />
      </div> */}
    </main>
  );
}

export default Searched;
