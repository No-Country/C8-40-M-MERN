import React from 'react';

const styles = {
  card: 'w-[224px] h-[440px] rounded-2xl border-solid	bg-slate-400 cursor-pointer ',
  img: ' rounded-t-2xl',
  middle: '',
  date: '',
  tags: '',
  info: ''
};
function Card({ element }) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={element.img} alt="" />
      <div className={styles.middle}>
        <p className={styles.date}> {element.date}</p>
        <span className={styles.tags}>{element.tags[0]}</span>
        <span className={styles.tags}>{element.tags[1]}</span>
      </div>
      <p className={styles.info}>{element.title}</p>
    </div>
  );
}

export default Card;
