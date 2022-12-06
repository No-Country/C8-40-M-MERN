import React, { useState, useEffect } from 'react';
import Card from './Card';
//import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const styles = {
  container: ' my-12 flex flex-col gap-8 w-[1200px]',
  titleContainer:
    'w-full flex justify-between items-center text-center text-white font-semibold text-2xl ',
  categoryTitle: 'capitalize',
  masContainer: 'flex items-center text-xl ',
  cardsContainer: 'flex gap-4 w-100% ',
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
            <Link to={'searched/' + tech}>
              <p className={styles.masContainer}>
                Ver más
                <IoIosArrowForward size="1.6rem" />
              </p>
            </Link>
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
