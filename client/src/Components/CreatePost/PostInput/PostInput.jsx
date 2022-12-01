import React from 'react';

function PostInput({ label, labelName, inputName, placeholder, titles, handleChange }) {
  const styles = {
    inputs: 'bg-transparent py-2 px-3 rounded-xl border-2 border-[#424867] outline-none ',
  };
  return (
    <>
      <label className={titles} htmlFor={labelName}>
        {label}
      </label>
      <input
        type="text"
        className={styles.inputs}
        onChange={handleChange}
        name={inputName}
        placeholder={placeholder}
      />
    </>
  );
}

export default PostInput;