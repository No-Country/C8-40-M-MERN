import React from 'react';
import Card from './Card';
import cards from '../../Utils/cards.json';
import CardMobile from './CardMobile';

const styles = {
  container: 'flex flex-col w-full ',
  sectionTitle: 'text-[#FFFFFF] px-[6px]',
  cardsDisplayer: 'hidden md:flex gap-2 ',
  cardsDisplayerM:
    'md:hidden grid grid-rows-15 grid-cols-2 gap-y-4 m-[10px]  justify-center justify-items-center',
};

function AllCards({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Home o Tecnologia</h1>
      <div className={styles.cardsDisplayer}>
        {data?.map((elm) => (
          <Card key={elm.id} element={elm} />
        ))}
        {/* {cards?.map((e) => {
          return <Card key={e.id} element={e} />;
        })} */}
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
