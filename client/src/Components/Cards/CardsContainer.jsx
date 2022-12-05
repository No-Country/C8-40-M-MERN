import React, { useState, useEffect } from 'react';
import Card from './Card';
//import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const styles = {
  container: ' my-12 flex flex-col gap-8 w-full',
  titleContainer:
    'w-full flex justify-between items-center text-center text-white font-semibold text-2xl ',
  masContainer: 'flex items-center text-xl ',
  cardsContainer: 'flex gap-4 w-full px-[100px]',
};

function CardContainer({ data, tech }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data?.filter((d) => d.technology.name === tech));
  }, [data]);

  return (
    <>
      {posts && (
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1 className={styles.categoryTitle}>{tech}</h1>
            <p className={styles.masContainer}>
              Ver más
              <IoIosArrowForward size="1.6rem" />
            </p>
          </div>
          <div className={styles.cardsContainer}>
            {posts?.slice(0, 5)?.map((e) => {
              return <Card key={e.id} element={e} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default CardContainer;
