import React from 'react';
import AllCards from '../../Components/Cards/AllCards';
import Pagination from '../../Components/Pagination/Pagination';
import { useGetAllPostsQuery } from '../../Redux/Api/apiSlice';

const styles = {
  mainContainer: 'pt-[80px] md:pl-[17%]  md:pr-6 w-full ',
  categoryTitle: 'text-4xl text-white',
  buttonSection: 'w-full flex justify-between gap-4 mt-6',
  filterButtons: 'w-full py-2 bg-gray-300',
  tagsContainer: 'w-full flex flex-wrap justify-evenly gap-4 mt-6',
  tagsButton:
    ' py-1 w-24 flex justify-center max-h-8 text-center overflow-hidden px-6 rounded-2xl bg-gray-500',
  container: 'hidden md:flex w-full',
  containerM: ' md:hidden',
};

function Home() {
  const { data, isLoading, isFetching, isError } = useGetAllPostsQuery();
  console.log(data?.data.docs);

  return (
    <main className={styles.mainContainer}>
      <section className={styles.buttonSection}>
        <button className={styles.filterButtons}>Videos</button>
        <button className={styles.filterButtons}>Imagenes</button>
        <button className={styles.filterButtons}>Documentación</button>
      </section>
      <AllCards data={data?.data.docs} tech="home" />
    </main>
  );
}

export default Home;
