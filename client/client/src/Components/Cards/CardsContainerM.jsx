import React from 'react';
import CardMobile from './CardMobile';
//import cards from '../../Utils/cards.json';
//import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const styles = {
  container: ' my-12 flex flex-col gap-8',
  titleContainer:
    'w-full flex justify-between items-center text-center text-white font-semibold text-2xl px-[16px] ',
  masContainer: 'flex  items-center text-xl ',
  cardsContainer: 'flex gap-2 ',
  motionDiv1: 'w-full overflow-hidden ',
  motionDiv2: ' flex gap-2 px-[16px] ',
  motionDivCard: '',
};

function CardContainerM({ data, tech }) {
  const [width, setWidth] = useState(0);
  const slider = useRef();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    setPosts(data?.filter((d) => d.technology.name === tech));
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.categoryTitle}>{tech}</h1>
        <Link to={`${tech}`}>
          <p className={styles.masContainer}>
            Ver más
            <IoIosArrowForward size="1.6rem" />
          </p>
        </Link>
      </div>
      <div>
        <motion.div ref={slider} whileTap={{ cursor: 'grabbing' }} className={styles.motionDiv1}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.motionDiv2}
          >
            {posts?.slice(0, 5)?.map((e) => {
              return (
                <motion.div className={styles.motionDivCard} key={e.id}>
                  <CardMobile key={e.id} element={e} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default CardContainerM;
