import React from 'react';
import AddToCart from './AddToCart';

const Recipe = ({ ingredients }) => {
  return (
    <div>
      <h1>Recipe</h1>
      <AddToCart ingredients={ingredients} />
    </div>
  );
};

export default Recipe;