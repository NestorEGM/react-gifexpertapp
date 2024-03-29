import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = (newCategory) => {
  //   setCategories([...categories, newCategory]);
  // };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
};

GiftExpertApp.propTypes = {

};

export default GiftExpertApp;
