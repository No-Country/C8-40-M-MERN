import React from "react"

const styles={
  cardmovil:"w-[158px] h-[200px] rounded-[12px] bg[#1E2235]",
  img:"w-full h-[90px]",
  info:"w-full h-[110px] flex ",
  title:"text-[16px]  text-[#DCDEF3] m-[9px]  ",
  date:"text-[14px] text-[#9A9CB4] m-[9px] "

}

function CardMobile(){
  return (
    <div className={styles.cardmovil}>
      <img className={styles.img}>
      </img>
      <div className={styles.info}>
        <p className={styles.title}></p>
        <p className={styles.date}></p>
      </div>
    </div>
  )
}

export default CardMobile