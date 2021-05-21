import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  // const categorias = ['One Punch'];
  const [categorias, setCategorias] = useState(['One Punch']);

  // const handleAdd = () => {
  //   // setCategorias((c) => [...c, 'DCComics']); // Esto es otra forma de hacerlo
  //   setCategorias([...categorias, 'DCComics']);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categorias.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
