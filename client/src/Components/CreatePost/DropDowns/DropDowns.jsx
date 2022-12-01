import React from 'react';
import DropdownPost from '../DropdownPost/DropdownPost';

function DropDowns({ data, setCategoria, setLenguaje, setTecnologia }) {
  return (
    <>
      <DropdownPost name="Categorias">
        {data?.data.categories.map((d) => (
          <p key={d.id} onClick={() => setCategoria(d.name)} className="cursor-pointer">
            {d.name}
          </p>
        ))}
      </DropdownPost>
      <DropdownPost name="Lenguajes">
        {data?.data.programmingL.map((d) => (
          <p key={d.id} onClick={() => setLenguaje(d.name)} className="cursor-pointer">
            {d.name}
          </p>
        ))}
      </DropdownPost>
      <DropdownPost name="Tecnologias">
        {data?.data.technologies.map((d) => (
          <p key={d.id} onClick={() => setTecnologia(d.name)} className="cursor-pointer">
            {d.name}
          </p>
        ))}
      </DropdownPost>
    </>
  );
}

export default DropDowns;
