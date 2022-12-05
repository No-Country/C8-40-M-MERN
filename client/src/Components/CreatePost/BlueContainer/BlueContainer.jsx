import React from 'react';
import soloLogo from '../../../Assets/soloLogo.png';
const styles = {
  mainContainer:
    'bg-[#2563EB] rounded-tl-2xl rounded-bl-2xl w-[293px] h-[600px] max-h-[800px] hidden lg:flex flex-col justify-center items-center absolute -left-[293px] top-[10%] px-3 ',
  logoContainer: ' w-full h-[200px] bg-[#252A41] rounded-xl overflow-hidden',
  letterContainer: ' text-xl font-semibold text-center mt-16',
  thankTitle: 'text-2xl mb-6',
  logo: 'w-full h-full ',
};
function BlueContainer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <img src={soloLogo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.letterContainer}>
        <h1 className={styles.thankTitle}>Gracias por compartir</h1>
        <p>¡Tu aporte es muy importante para nosotros!</p>
      </div>
    </div>
  );
}

export default BlueContainer;
