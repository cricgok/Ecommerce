import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Heading from '../Shared/Heading';
import ProductCard from '../Products/ProductCard';
import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-4.jpg';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat HeadPhone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Googles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img1,
    title: "Boat HeadPhone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img3,
    title: "Googles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = ({ addToCart }) => {
  const query = useQuery();
  const searchTerm = query.get('search') || '';
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = ProductsData.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  return (
    <div>
      <div className='container'>
        <br />
        <Heading title="Our Products" subtitle="Explore Our Products" />
        {filteredProducts.length > 0 ? (
          <ProductCard data={filteredProducts} addToCart={addToCart} />
        ) : (
          <p>No products found for your search.</p>
        )}
      </div>
    </div>
  );
}; 

export default Products;
