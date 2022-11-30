import React, { useState } from 'react';
import CardsContainer from '../../Components/Cards/CardsContainer';
import CardsContainerM from '../../Components/Cards/CardsContainerM';
import AllCards from '../../Components/Cards/AllCards';
import { useParams } from 'react-router-dom';
import TagsFilters from '../../Components/Home/TagsFilters';

import { useGetAllPostsQuery, useGetCategoriesQuery } from '../../Redux/Api/apiSlice';

const styles = {
  mainContainer: 'pt-[80px] md:pl-[17%] md:pr-6 w-full ',
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

  const [filtering, setFiltering] = useState(null);
  const { category } = useParams();

  /*  useEffect(() => {
    setFiltering(
      info[0].categories.filter((cat) => {
        return cat.name === category;
      })
    );

    console.log(filtering);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
 */
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.categoryTitle}>{filtering && filtering[0].name}</h1>

      <section className={styles.buttonSection}>
        <button className={styles.filterButtons}>Videos</button>

        <button className={styles.filterButtons}>Imagenes</button>

        <button className={styles.filterButtons}>Documentación</button>
      </section>

      <TagsFilters styles={styles} filtering={filtering} />
      <div className={styles.container}>
        <CardsContainer data={data?.data.docs} />
      </div>
      <div className={styles.containerM}>
        <CardsContainerM data={data?.data.docs} />
      </div>

      <AllCards data={data?.data.docs} />
    </main>
  );
}

export default Home;
