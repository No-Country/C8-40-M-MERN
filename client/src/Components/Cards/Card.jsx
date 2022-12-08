import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFalseFocus } from '../../Redux/Slices/searchFocusSlice';

function Card({ element, zIndex }) {
  const styles = {
    card: `w-[224px] h-[390px] animate__animated animate__fadeInUp ${zIndex} rounded-2xl  border-solid	bg-[#202234] cursor-pointer shadow-lg tranform transition duration-500 hover:scale-105 hover:shadow-2xl `,
    img: 'rounded-t-2xl w-full h-[210px] pointer-events-none object-contain',
    video: ' rounded-t-2xl w-full h-[210px] pointer-events-none',
    middle: 'mt-[12px] w-full h-[180px]  ',
    date: 'text-[#ABADC6] text-[14px] m-[9px] ',
    tags: 'bg-[#424867] text-[12px] text-[#DCDEF3] px-[8px] py-[4px] border-solid rounded-[25px] mr-1',
    tagcontainer: 'm-[9px] flex items-end place-content-center ',
    title: 'text-[#DCDEF3] m-[9px] text-[18px] w-full h-[50%]',
  };

  const dispatch = useDispatch();
  return (
    <div className={styles.card} onClick={() => dispatch(setFalseFocus())}>
      <Link to={`/${element.category.name}/detail/${element.id}`}>
        {element.resource === 'video' ? (
          <img
            className={styles.img}
            src={'https://img.youtube.com/vi/' + element.url.split('=')[1] + '/0.jpg'}
            alt="VIDEO-NO-FOUND"
          />
        ) : element.resource === 'document' ? (
          <img
            className={styles.img}
            src="https://img.freepik.com/free-vector/illustration-document-icon_53876-28510.jpg?w=2000"
            alt="DOCUMENT-NO-FOUND"
          />
        ) : (
          <img className={styles.img} src={element.url} alt="DOCUMENT-NO-FOUND" />
        )}
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
