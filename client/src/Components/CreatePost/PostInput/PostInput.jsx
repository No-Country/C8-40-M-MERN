import React from 'react';
import { useForm } from 'react-hook-form';
function PostInput({ label, labelName, inputName, placeholder, titles, handleChange, inputStyle }) {
  const styles = {
    inputs: 'bg-transparent py-2 px-3 rounded-xl border-2 border-[#424867] outline-none ',
  };

  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <label className={titles} htmlFor={labelName}>
        {label}
      </label>
      <input
        type="text"
        className={styles.inputs}
        name={inputName}
        placeholder={placeholder}
        {...register(inputName, {
          onChange: (e) => {
            handleChange(e);
          },
          required: true,
        })}
      />
    </>
  );
}

export default PostInput;
