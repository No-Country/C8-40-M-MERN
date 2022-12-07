import React, { useState, useEffect } from 'react';
//import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { useGetAllPostsQuery } from '../Redux/Api/apiSlice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
  containerDetail: 'pt-[80px] flex flex-col place-content-center',
  arrow:
    'flex rounded-[8px] h-[35px] place-self-center items-center w-[336px]  md:w-[70%] text-lg text-[#DCDEF3]',
  button: 'cursor-pointer flex flex-row ',
  detailCard:
    'w-[336px] rounded-[8px] border-solid bg-[#1E2235] m-[1px] place-self-center md:w-[70%] ',
  users:
    'w-full px-2 h-[34px] md:h-[51px] rounded-[8px] flex flex-row lg:px-[50px] md:px-[20px] mt-[5px] mb-[9px] md:mt-[22px] md:mb-[30px] items-center ',
  userImg: 'h-[34px] w-[34px] md:h-[51px] md:w-[51px] rounded-full',
  userInfo: 'text #ABADC6 ml-[12px] md:ml-[17px] ',
  userName: 'text-white text-[11px] md:text-[17px] ',
  userTitle: 'text-[8px] md:text-[13px] text-[#999BB4] ',
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
  const navigate = useNavigate();

  const user = {
    name: 'Juanita Pendorcha',
    img: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
    title: 'Pendorchera oficial',
  };

  const { id } = useParams();
  const { data } = useGetAllPostsQuery();

  const getUserByID = async () => {
    let userFind;
    const usuario = await axios.get(
      `https://c8-40-m-mern-kappa.vercel.app/api/users?_id=${selected.user.id}`
    );
    userFind = usuario;
    return userFind;
  };

  useEffect(() => {
    setSelected(data?.data.docs.find((elem) => elem.id === id));
    console.log(selected);
    getUserByID();
  }, [data]);

  return (
    <div>
      {selected ? (
        <div className={styles.containerDetail}>
          <div className={styles.arrow}>
            <button onClick={() => navigate(-1)} className={styles.button}>
              <IoIosArrowBack size="1.6rem" className={styles.menorque} />
              <p>Volver</p>
            </button>
          </div>
          <div className={styles.detailCard}>
            <div className={styles.users}>
              <img className={styles.userImg} src={user.img} alt="#" />
              <div className={styles.userInfo}>
                <p className={styles.userName}>{selected.user.userName}</p>
                <p className={styles.userTitle}>{user.title}</p>
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
