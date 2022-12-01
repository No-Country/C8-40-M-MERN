import React, { useState, useEffect } from 'react';
import Card from './Card';
import cards from '../../Utils/cards.json';
import { AiOutlineArrowRight } from 'react-icons/ai';

const styles = {
  container: ' my-12 flex flex-col gap-8 w-full',
  titleContainer:
    'w-full flex justify-between items-center text-center text-white font-semibold text-2xl ',
  masContainer: 'flex gap-2 items-center text-xl ',
  cardsContainer: 'flex gap-4 w-full',
};

function CardContainer({ data, tech }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data?.filter((d) => d.technology.name === tech));
  }, [data]);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.categoryTitle}>{tech}</h1>
        <p className={styles.masContainer}>
          Más <AiOutlineArrowRight />
        </p>
      </div>
      <div className={styles.cardsContainer}>
        {posts?.slice(0, 5)?.map((e) => {
          return <Card key={e.id} element={e} />;
        })}
      </div>
    </div>
  );
}

export default CardContainer;
