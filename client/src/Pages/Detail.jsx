import React, { useState, useEffect } from 'react';
//import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { useGetAllPostsQuery } from '../Redux/Api/apiSlice';
import { useParams } from 'react-router-dom';

const styles = {
  containerDetail: 'pt-[80px] flex flex-col place-content-center',
  arrow:
    'flex  rounded-[8px] h-[35px] place-self-center items-center w-[336px]  md:w-[70%] text-lg text-[#DCDEF3]',
  detailCard:
    'w-[336px] rounded-[8px] border-solid bg-[#1E2235] m-[12px] place-self-center md:w-[70%] ',
  creator: 'h-[60px] md:h-[100px] rounded-[8px]',
  creatorImg: '',
  creatorInfo: '',
  creatorName: 'text-white',
  creatorTitle: '',
  media: 'w-full rounded-[8px] h-[190px] lg:px-[50px] md:h-[450px] lg:h-[500px]',
  img: 'w-full rounded-[8px] md:h-[450px] ',
  doc: 'w-full rounded-[8px] md:h-[450px]  bg-white',
  video: 'w-full rounded-[8px] h-[190px]  md:h-[315px] lg:h-[500px] ',
  dateTags: 'w-full lg:px-[50px] p-4 flex gap-2 justify-between  items-center ',
  date: 'text-[12px] text-[#ABADC6] md:text-[18px] ',
  tagcontainer: ' flex ',
  tags: 'bg-[#424867] text-[12px] md:text-[18px] text-[#DCDEF3] px-[8px] py-[4px] border-solid rounded-[25px] mr-1',
  title: 'w-full p-2 flex text-[14px] md:text-[25px] text-[#FFFFFF] md:px-[20px] lg:px-[50px]',
  desc: 'w-full p-2 flex text-[11px] md:text-[18px] text-[#ABADC6] mb-[15px] md:px-[20px]   lg:px-[50px] ',
};

function Detail() {
  const [selected, setSelected] = useState(null);

  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isFetching, isError } = useGetAllPostsQuery();

  useEffect(() => {
    setSelected(data?.data.docs.find((elem) => elem.id === id));
    console.log(selected);
  }, [data]);

  return (
    <div>
      {selected ? (
        <div className={styles.containerDetail}>
          <div className={styles.arrow}>
            <IoIosArrowBack size="1.6rem" className={styles.menorque} />
            <p>Volver</p>
          </div>
          <div className={styles.detailCard}>
            <div className={styles.creator}>
              {/* <img className={styles.creatorImg} src={selected.user.img} alt="#" /> */}
              <div className={styles.creatorInfo}>
                <p className={styles.creatorName}>{selected.user.userName}</p>
                {/* <p className={styles.creatorTitle}>{selected.user.title}</p> */}
              </div>
            </div>
            <div className={styles.media}>
              {selected.resource == 'video' ? (
                <iframe
                  title={selected.url}
                  className={styles.video}
                  src={'https://www.youtube.com/embed/' + selected.url.split('=')[1]}
                  alt=":("
                />
              ) : selected.resource == 'document' ? (
                <iframe className={styles.doc} src={selected.url} alt=":(" />
              ) : (
                <img className={styles.img} src={selected.url} alt=":(" />
              )}
            </div>
            <div className={styles.dateTags}>
              <p className={styles.date}>{selected.date}</p>
              <div className={styles.tagcontainer}>
                <span className={styles.tags}>{selected.programmingL.name}</span>
                <span className={styles.tags}>{selected.technology.name}</span>
              </div>
            </div>
            <p className={styles.title}>{selected.title}</p>
            <p className={styles.desc}>{selected.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
export default Detail;
