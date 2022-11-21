import React from 'react';

const styles = {
  cardmovil: 'w-[158px] h-[200px] rounded-[12px] bg-[#202234]',
  img: 'w-full h-[90px] rounded-t-[12px]',
  video: 'w-full h-[90px] rounded-t-[12px]',
  info: 'w-full h-[100px] flex flex-col',
  title: 'text-[16px]  text-[#DCDEF3] m-[9px]',
  date: 'text-[14px] text-[#9A9CB4] m-[9px] '
};

function CardMobile({ element }) {
  return (
    <div className={styles.cardmovil}>
      {element.img ? (
        <img className={styles.img} src={element.img} />
      ) : (
        <iframe className={styles.video} src={element.video} />
      )}
      <div className={styles.info}>
        <p className={styles.title}>{element.title}</p>
        <p className={styles.date}>{element.date}</p>
      </div>
    </div>
  );
}

export default CardMobile;
