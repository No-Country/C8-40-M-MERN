import React from 'react';
import Card from './Card';
import cards from '../../Utils/cards.json';

const styles = {
  container: 'flex justify-evenly    '
};

function CardContainer() {
  return (
    <div className={styles.container}>
      {cards?.map((e) => {
        return <Card key={e.id} element={e} />;
      })}
    </div>
  );
}

export default CardContainer;
