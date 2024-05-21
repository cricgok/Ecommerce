import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductsData from '../Products/ProductsData'; 

const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = ProductsData.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    console.log("Adding product to cart:", product); // Check if this log appears in the console
    addToCart(product);
    alert('Product added to cart');
    navigate('/h/cart');
  };
  
  

  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-4'>Product Details</h1>
      <div className='flex'>
        <img src={product.img} alt={product.title} className='h-64 w-64 object-cover rounded-md' />
        <div className='ml-10'>
          <h1 className='text-3xl font-bold'>{product.title}</h1>
          <p className='text-xl text-gray-700 dark:text-gray-300 mt-4'>${product.price}</p>
          <p className='text-md text-gray-600 dark:text-gray-400 mt-4'>{product.description}</p>
          <button onClick={handleAddToCart} className='mt-6 px-4 py-2 bg-primary text-white rounded-md'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
