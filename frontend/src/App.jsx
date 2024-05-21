import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import headphone from './assets/hero/headphone.png';
import smartwatch from "./assets/category/smartwatch2-removebg-preview.png";
import ProductsData from './components/Products/ProductsData';
import Success from './components/Payments/Payments'; // Assuming this is the success page component
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PHJS2SF83D3uebjphZq4dmxWvgJeOJWeBeLrLW2hbzMSLQlDLxrTJcVorjrB9f696Dmn1CbO3XeFNiRAFHZ1CEk00ESzeYRxz');

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

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [userEmail, setUserEmail] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state to manage login status

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = ProductsData.filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const [userName, setUserName] = useState(null);


  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
      
        <Navbar handleSearch={handleSearch} darkMode={darkMode} setDarkMode={setDarkMode} isLoggedIn={isLoggedIn}  userName={userName} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/h" element={
            <>
              <section id="hero"><Hero /></section>
              <section id="category"><Category /></section>
              <section id="category2"><Category2 /></section>
              <section id="services"><Services /></section>
              <section id="banner"><Banner data={BannerData} /></section>
              <section id="products"><Products products={filteredProducts.length > 0 ? filteredProducts : ProductsData} addToCart={addToCart} /></section>
              <section id="banner2"><Banner data={BannerData2} /></section>
              <section id="blog"><Blogs /></section>
              <section id="partners"><Partners /></section>
              <section id="footer"><Footer /></section>
            </>
          } />
          <Route path="/h/products/:productId" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/h/cart" element={<Cart cart={cart} setCart={setCart} userEmail={userEmail}/>} />
          <Route path="/h/blogs" element={<Blogs />} />
          <Route path="/h/products" element={<Products />} />
          <Route path="/login" element={<Login setUserName={setUserName} setUserEmail={setUserEmail} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/h/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
