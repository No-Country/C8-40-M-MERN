import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  card: 'w-[224px] h-[390px] rounded-2xl border-solid	bg-[#202234] cursor-pointer shadow-lg tranform transition duration-500 hover:scale-105 hover:shadow-2xl ',
  img: 'rounded-t-2xl w-full h-[210px]',
  video: ' rounded-t-2xl w-full h-[210px]',
  middle: 'mt-[12px] w-full h-[180px]  ',
  date: 'text-[#ABADC6] text-[14px] m-[9px] ',
  tags: 'bg-[#424867] text-[12px] text-[#DCDEF3] px-[8px] py-[4px] border-solid rounded-[25px] mr-1',
  tagcontainer: 'm-[9px] flex items-end place-content-center ',
  title: 'text-[#DCDEF3] m-[9px] text-[18px] w-full h-[50%]',
};
function Card({ element }) {
  // console.log(element);
  return (
    <div className={styles.card}>
      <Link to={'detail/' + element.id}>
        <img
          className={styles.img}
          src={'https://miro.medium.com/max/640/1*Aih9FwHjvM6AEL1aBh6W2g.png'}
          alt="#"
        />
        {/* {element.img ? (
          <img className={styles.img} src={element.img} alt="#" />
        ) : (
          <iframe className={styles.video} src={element.video} title={element.video} />
        )} */}
        <div className={styles.middle}>
          <p className={styles.title}>{element.title}</p>
          <p className={styles.date}>Fecha: {element.date}</p>
          <div className={styles.tagcontainer}>
            <span className={styles.tags}>{element.programmingL?.name}</span>
            <span className={styles.tags}>{element.technology?.name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
