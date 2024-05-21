import { useEffect, useState } from 'react';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const initStripe = async () => {
  const res = await axios.get('/api/publishable-key');
  const publishableKey = await res.data.publishable_key;
  return loadStripe(publishableKey);
};

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const stripePromise = initStripe();

  useEffect(() => {
    const createPaymentIntent = async () => {
      const response = await axios.post('/api/create-payment-intent');
      setClientSecret(response.data.client_secret);
      setLoading(false);
    };
    createPaymentIntent();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
