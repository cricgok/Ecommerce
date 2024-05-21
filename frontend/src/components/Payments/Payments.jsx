import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Img from "../../assets/website/type.jpg";

const PaymentConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};
  
  const generateOrderId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const [orderId, setOrderId] = useState(generateOrderId());

  const sendEmailConfirmation = async (orderId) => {
    try {
      const response = await axios.post('http://localhost:4000/send-email', {
        email: email,
        orderId: orderId
      });
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  useEffect(() => {
    if (email) {
      sendEmailConfirmation();
    }
  }, [email]);

  const navigateToHome = () => {
    navigate('/h');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <img src={Img} alt="Order Icon" className="mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-gray-800">Thank You for Your Purchase!</h2>
          <p className="text-gray-600 mb-6">Your order has been confirmed and will be delivered soon.</p>
          <p className="text-lg font-bold text-indigo-600">Order ID: #{orderId}</p>
          <button 
            onClick={navigateToHome} 
            className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmationPage;
