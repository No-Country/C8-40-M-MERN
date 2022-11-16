import React from 'react';
import Card from './Card';
import cards from '../../Utils/cards.json';

const styles = {
  container: 'flex justify-evenly  m-3  '
};

function CardContainer() {
  return (
    /*<div>
      {
        result?.map((r)=>{
          return 
            <div>
              <p>{r.categoryName}</p>
              <span> Mas-> </span>
            </div>
            <div className={styles.container}>
            {r.cards?.map((cards) => {
              return <Card key={r.cards.id} element={r.cards.e} />;
            })}
          </div> 
        } )
      }}

    </div>
 */
    <div className={styles.container}>
      {cards?.map((e) => {
        return <Card key={e.id} element={e} />;
      })}
    </div>
  );
}

export default CardContainer;
