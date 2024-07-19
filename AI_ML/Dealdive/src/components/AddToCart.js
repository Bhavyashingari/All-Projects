import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const AddToCart = ({ ingredients }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (ingredient) => {
    dispatch(addToCart(ingredient));
  };

  return (
    <div>
      <h2>Add to Cart</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <span>{ingredient.name}</span>
            <button onClick={() => handleAddToCart(ingredient)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;