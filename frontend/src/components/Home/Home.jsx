import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Partners from '../Partners/Partners';
import Footer from '../Footer/Footer';
import Login from '../Auth/Login';
import LoginBanner from './LoginBanner';
import headphone from '../../assets/hero/headphone.png';
import smartwatch from "../../assets/category/smartwatch2-removebg-preview.png";
import ProductsData from '../Products/ProductsData';

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem Ipsum, dolor sit amet, consectetur adipiscing elit.",
  bgColor: '#f42c37'
};

const BannerData2 = {
  discount: "60% OFF",
  title: "Happy Hours",
  date: "14 Jan to 31 Jan",
  image: smartwatch,
  title2: "Smart Bass",
  title3: "Winter Sale",
  title4: "Lorem Ipsum, dolor sit amet, consectetur adipiscing elit.",
  bgColor: '#2dcc6f'
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for login status
  const navigate = useNavigate();

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = ProductsData.filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
      <LoginBanner isLoggedIn={isLoggedIn} />
      <section id="hero"><Hero /></section>
      <section id="category"><Category /></section>
      <section id="services"><Services /></section>
      <section id="banner"><Banner data={BannerData} /></section>
      <section id="banner2"><Banner data={BannerData2} /></section>
      <section id="partners"><Partners /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
};

export default Home;
