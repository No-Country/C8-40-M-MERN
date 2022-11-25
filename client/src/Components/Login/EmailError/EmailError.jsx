import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
const styles = {
  container: 'w-[90%] sm:w-full bg-[#1E2235] p-1 md:px-4 rounded-lg absolute text-sm top-11 ',
  span: 'flex items-center gap-2 text-[#EF4444] ',
  icon: 'text-xl ',
  secondText: 'text-[#ABADC6] mt-1 px-7 '
};
function EmailError() {
  return (
    <div className={styles.container}>
      <span className={styles.span}>
        <FiAlertCircle className={styles.icon} />
        <p>Hubo un problema para encontrar tu cuenta</p>
      </span>
      <p className={styles.secondText}>Por favor, intenta con un email diferente</p>
    </div>
  );
}

export default EmailError;
