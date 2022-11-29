import React from 'react';
import CardMobile from './CardMobile';
import cards from '../../Utils/cards.json';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const styles = {
  container: ' my-12 flex flex-col gap-8',
  titleContainer:
    'w-full flex justify-between items-center text-center text-white font-semibold text-2xl px-[6px] ',
  masContainer: 'flex gap-2 items-center text-xl ',
  cardsContainer: 'flex gap-2 ',
  motionDiv1: 'w-full overflow-hidden ',
  motionDiv2: ' flex gap-2 px-[100px] ',
  motionDivCard: '',
};

function CardContainerM() {
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.categoryTitle}>Main Mobile</h1>
        <p className={styles.masContainer}>
          Más <AiOutlineArrowRight />
        </p>
      </div>
      <div>
        <motion.div ref={slider} whileTap={{ cursor: 'grabbing' }} className={styles.motionDiv1}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.motionDiv2}
          >
            {cards?.map((e) => {
              return (
                <motion.div className={styles.motionDivCard} key={e.date}>
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
