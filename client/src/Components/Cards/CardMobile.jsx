import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  cardmovil: 'w-[158px] h-[200px] rounded-[12px] bg-[#202234]',
  img: 'w-full h-[90px] rounded-t-[12px] pointer-events-none',
  video: 'w-full h-[90px] rounded-t-[12px]',
  info: 'w-full h-[100px] flex flex-col',
  title: 'text-[14px]  text-[#DCDEF3] m-[9px]',
  date: 'text-[14px] text-[#9A9CB4] m-[9px] ',
};

{
  /* <iframe
  title={element.url}
  className={styles.video}
  src={'https://www.youtube.com/embed/' + element.url.split('=')[1]}
  alt=":("
/> */
}

function CardMobile({ element }) {
  return (
    <div className={styles.cardmovil}>
      <Link to={'detail/' + element.id}>
        {element.resource == 'video' ? (
          <img
            className={styles.img}
            src={'https://img.youtube.com/vi/' + element.url.split('=')[1] + '/0.jpg'}
            alt=":("
          />
        ) : element.resource == 'document' ? (
          <img
            className={styles.img}
            src="https://img.freepik.com/free-vector/illustration-document-icon_53876-28510.jpg?w=2000"
            alt=":("
          />
        ) : (
          <img className={styles.img} src={element.url} alt=":(" />
        )}
        <div className={styles.info}>
          <p className={styles.title}>{element.title}</p>
          <p className={styles.date}>{element.date}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardMobile;
