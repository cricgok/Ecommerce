import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {data.map((product) => (
          <div key={product.id}>
            <Link to={`/h/products/${product.id}`}>
              <div>
                <img src={product.img} alt={product.title} className='h-[180px] w-[260px] object-cover rounded-md' />
              </div>
              <div className='leading-7'>
                <h2 className='font-semibold'>{product.title}</h2>
                <h2 className='font-bold'>${product.price}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
