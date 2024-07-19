import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Discription from "./Discription.js";
import '../css/product.css';

const Product = (props) => {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const updateProductList = (response) => {
    setProductList(response);
  };

  const fetchProductData = () => {
    const url = "http://192.168.1.22/dealdive/php-server/product.php";
    axios.request(url)
      .then((response) => updateProductList(response.data))
      .catch((error) => setError(error));
  };

  const handleAddToCart = async (ingredient) => {
    const cartUrl = `http://192.168.1.22/dealdive/php-server/add-to-cart.php`;
    axios.post(cartUrl, { product_id: ingredient.id, quantity: 1 })
      .then((response) => {
        setCart([...cart, ingredient]);
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchProductData();

    const interval = setInterval(fetchProductData, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {productList.map((product) => {
        if (product.pid === props.slug) {
          return (
            <div className='main-p'>
              <div className='main-p-img'>
                <img className="p-img" src={product.img} />
              </div>
              <Discription product={product} />
              {product.recipe && (
                <div>
                  <h2>Recipe</h2>
                  <ul>
                    {product.recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.name} ({ingredient.quantity})
                        <button onClick={() => handleAddToCart(ingredient)}>Add to Cart</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        }
      })}
    </>
  );
};

export default Product;