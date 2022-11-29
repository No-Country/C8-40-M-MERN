import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useGetAllPostsQuery } from '../Redux/Api/apiSlice';
import { useParams } from 'react-router-dom';
import cards from '../Utils/cards.json';

const styles = {
  containerDetail: 'pt-[80px] flex flex-col place-content-center',
  arrow:
    'place-self-center bg-[#DCDEF3] rounded-[8px] border-solid border-2 border-black p-[3px] w-[60px] h-[30px] ',
  detailCard:
    'w-[336px] rounded-[8px] border-solid bg-[#1E2235] m-[12px] place-self-center md:w-[70%] ',
  creator: '',
  creatorImg: '',
  creatorInfo: '',
  creatorName: '',
  creatorTitle: '',
  img: 'w-full rounded-t-[8px] md:max-h-[450px]',
  video: 'w-full rounded-t-[8px] h-[190px] md:h-[315px] lg:h-[500px] ',
  dateTags: 'w-full mt-[8px] p-4 flex gap-2 justify-between  items-center ',
  date: 'text-[12px] text-[#ABADC6] md:text-[18px] ',
  tagcontainer: ' flex ',
  tags: 'bg-[#424867] text-[12px] md:text-[18px] text-[#DCDEF3] px-[8px] py-[4px] border-solid rounded-[25px] mr-1',
  title: 'w-full p-2 flex text-[14px] md:text-[25px] text-[#FFFFFF] ml-[16px] ',
  desc: 'w-full p-2 flex text-[11px] md:text-[18px] text-[#ABADC6] mb-[15px] ml-[16px] ',
};

function Detail() {
  const [selected, setSelected] = useState(null);
  const cardTest = cards[0];
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isFetching, isError } = useGetAllPostsQuery();
  useEffect(() => {
    setSelected(data?.data.docs.find((elem) => elem.id === id));
  }, [selected, data]);
  return (
    <>{selected && <p className="pt-64 pl-32 text-white ">{selected.title}</p>}</>
    // <div className={styles.containerDetail}>
    //   <AiOutlineArrowLeft className={styles.arrow} />
    //   <div className={styles.detailCard}>
    //     <div className={styles.creator}>
    //       <img className={styles.creatorImg} src={cardTest.user.img} alt="#" />
    //       <div className={styles.creatorInfo}>
    //         <p className={styles.creatorName}>{cardTest.user.name}</p>
    //         <p className={styles.creatorTitle}>{cardTest.user.title}</p>
    //       </div>
    //     </div>
    //     {cardTest.img ? (
    //       <img className={styles.img} src={cardTest.img} alt="#" />
    //     ) : (
    //       <iframe
    //         title={cardTest.video}
    //         className={styles.video}
    //         src={cardTest.video}
    //         allowFullScreen
    //       />
    //     )}

    //     <div className={styles.dateTags}>
    //       <p className={styles.date}>{cardTest.date}</p>

    //       <div className={styles.tagcontainer}>
    //         <span className={styles.tags}>{cardTest.tags[0]}</span>

    //         <span className={styles.tags}>{cardTest.tags[1]}</span>
    //       </div>
    //     </div>
    //     <p className={styles.title}>{cardTest.title}</p>
    //     <p className={styles.desc}>{cardTest.desc}</p>
    //   </div>
    // </div>
  );
}
export default Detail;
