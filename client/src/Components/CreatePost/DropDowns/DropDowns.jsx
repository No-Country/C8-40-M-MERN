import React from 'react';
import DropdownPost from '../DropdownPost/DropdownPost';

function DropDowns({ data, setCategoria, setLenguaje, setTecnologia, postData, setTag }) {
  const style = {
    text: 'cursor-pointer active:text-blue-500',
  };
  return (
    <>
      <DropdownPost name={postData.category?.name || 'Categorias'}>
        {data?.data.categories.map((d) => (
          <p key={d.id} onClick={() => setCategoria(d.name)} className={style.text}>
            {d.name}
          </p>
        ))}
      </DropdownPost>
      <DropdownPost name={postData.programmingL?.name || 'Lenguajes'}>
        {data?.data.programmingL.map((d) => (
          <p key={d.id} onClick={() => setLenguaje(d.name)} className={style.text}>
            {d.name}
          </p>
        ))}
      </DropdownPost>
      <DropdownPost name={postData.technology?.name || 'Tecnologias'}>
        {data?.data.technologies.map((d) => (
          <p key={d.id} onClick={() => setTecnologia(d.name)} className={style.text}>
            {d.name}
          </p>
        ))}
      </DropdownPost>
      <DropdownPost name={postData.tag?.name || 'Tags'}>
        {data?.data.tags.map((d) => (
          <p key={d.id} onClick={() => setTag(d.name)} className={style.text}>
            {d.name}
          </p>
        ))}
      </DropdownPost>
    </>
  );
}

export default DropDowns;
