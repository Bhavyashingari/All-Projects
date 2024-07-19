import React from 'react';
import { useSelector } from 'react-redux';
import { getRecommendedProducts } from '../selectors/productSelectors';

const RecommendedProducts = () => {
  const recommendedProducts = useSelector(getRecommendedProducts);

  return (
    <div>
      <h2>Recommended Products</h2>
      <ul>
        {recommendedProducts.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedProducts;