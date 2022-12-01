import React from 'react';

const styles = {
  mainContainer:
    'bg-[#2563EB] rounded-tl-2xl rounded-bl-2xl w-[293px] min-h-[75%] max-h-[500px] hidden lg:flex flex-col justify-center items-center absolute -left-[293px] top-[10%] px-3 ',
  logoContainer: ' w-full h-[200px] bg-[#252A41] rounded-xl ',
  letterContainer: ' text-xl font-semibold text-center mt-16',
  thankTitle: 'text-2xl mb-6',
};
function BlueContainer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}></div>
      <div className={styles.letterContainer}>
        <h1 className={styles.thankTitle}>Gracias por compartir</h1>
        <p>¡Tu aporte es muy importante para nosotros!</p>
      </div>
    </div>
  );
}

export default BlueContainer;
