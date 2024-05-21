import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PHJS2SF83D3uebjphZq4dmxWvgJeOJWeBeLrLW2hbzMSLQlDLxrTJcVorjrB9f696Dmn1CbO3XeFNiRAFHZ1CEk00ESzeYRxz');

const CartComponent = ({ cart, setCart, userEmail }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const sendEmail = async () => {
    try {
      await axios.post('http://localhost:4000/send-email', { email: userEmail, cart });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error.response || error.message);
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.post('http://localhost:4000/create-checkout-session', { cart });
      const { url } = response.data;
      await sendEmail();
      
      setCart([]);
      
      navigate('/h/success');
  
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error.response || error.message);
      setError(error.response ? error.response.data.error.message : error.message);
    } finally {
      setLoading(false);
    }
  };
  

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-3xl font-bold mb-4'>Cart</h1>
      {error && <p className="text-red-500">{error}</p>}
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src={product.img} alt={product.title} className='h-16 w-16 object-cover rounded-md' />
                  <div>
                    <span>{product.title}</span>
                    <span>${product.price}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQuantity(product.id)} className="px-2 py-1 bg-gray-200 rounded-md">-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => increaseQuantity(product.id)} className="px-2 py-1 bg-gray-200 rounded-md">+</button>
                  <button onClick={() => removeFromCart(product.id)} className="px-2 py-1 bg-red-500 text-white rounded-md">Remove</button>
                  <span>Total: ${(product.price * product.quantity).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold">Total: ${getTotalPrice().toFixed(2)}</p>
          <div className="flex justify-end gap-4 mt-6">
            <button onClick={() => navigate('/h/products')} className='px-4 py-2 bg-secondary text-white rounded-md'>Add More</button>
            <button 
              onClick={handlePayment} 
              className='px-4 py-2 bg-primary text-white rounded-md'
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

const Cart = (props) => (
  <Elements stripe={stripePromise}>
    <CartComponent {...props} />
  </Elements>
);

export default Cart;
