import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  // const handleAdd = () => {
  //     setCategories([ ...categories, 'HunterXHunter' ])
  //     setCategories( cats => [ ...cats, 'HunterXHunter' ])
  // }

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
            categories.map( category => (
                <GifGrid
                    key={ category } 
                    category={ category } 
                />
            ))
        }
      </ol>
    </>
  );

};

export default GifApp;
