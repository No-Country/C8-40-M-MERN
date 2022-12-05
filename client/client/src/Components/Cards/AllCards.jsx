import React from 'react';
import Card from './Card';
import cards from '../../Utils/cards.json';
import CardMobile from './CardMobile';

const styles = {
  container: 'flex flex-col w-full ',
  sectionTitle: 'text-[#FFFFFF] px-[6px]',
  cardsDisplayer: 'hidden md:flex flex-wrap gap-2 ',
  cardsDisplayerM:
    'md:hidden grid grid-rows-15 grid-cols-2 gap-y-4 gap-x-1 m-[10px]  justify-center justify-items-center',
};

function AllCards({ data, tech }) {
  console.log(data);
  return (
    <div className={styles.container}>
      {tech !== 'home' ? <h1 className={styles.sectionTitle}>{tech}</h1> : <></>}
      <div className={styles.cardsDisplayer}>
        {data?.map((elm) => (
          <Card key={elm.id} element={elm} />
        ))}
      </div>
      <div className={styles.cardsDisplayerM}>
        {data?.map((e) => {
          return <CardMobile key={e.id} element={e} />;
        })}
      </div>
    </div>
  );
}

export default AllCards;
