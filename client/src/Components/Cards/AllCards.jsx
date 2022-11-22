import React from 'react';
import Card from './Card';
import cards from '../../Utils/cards.json';

const styles = {
  container: 'flex flex-col w-full gap-8',
  cardsDisplayer: 'flex gap-4 '
};

function AllCards() {
  return (
    <div className={styles.container}>
      <div className={styles.cardsDisplayer}>
        {cards?.map((e) => {
          return <Card key={e.id} element={e} />;
        })}
      </div>
    </div>
  );
}

export default AllCards;
