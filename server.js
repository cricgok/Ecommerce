const express = require('express');
//import express from 'express';
const cors = require('cors');

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const stripe = require('stripe')('sk_test_51PHJS2SF83D3uebjzKPzoGwqKJpElaJ6PHWsKO3bI2YRPKrWtCQJIGtQWdZmzbWIjAqtfzaODiTSiL1mQvqscfq8006MLJx5nU');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());




// Create a MySQL connection
const db = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'Gokul@123',
  database: 'ecommerce'
});

// Connect to MySQL database
db.connect(err => {
  if (err) {
      console.error('Error connecting to MySQL:', err);
  } else {
      console.log('Connected to MySQL database');
  }
});

// Signup route
app.post('/api/signup', async (req, res) => {
  const { username, email, password, phone } = req.body;

  try {
      // Check if the user already exists
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
      }

      // Insert new user into the database
      const sql = 'INSERT INTO Users (username, email, password, phone) VALUES (?, ?, ?, ?)';
      db.query(sql, [username, email, password, phone], (err, result) => {
          if (err) {
              console.error('Error inserting user into database:', err);
              return res.status(500).json({ message: 'Server error' });
          }
          console.log('User inserted into database');
          res.status(201).json({ message: 'User created successfully' });
      });
  } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Server error' });
  }
});


// Helper function to get user by email
const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Users WHERE email = ?';
      db.query(sql, email, (err, result) => {
          if (err) {
              console.error('Error querying database:', err);
              reject(err);
          }
          if (result.length > 0) {
              resolve(result[0]);
          } else {
              resolve(null);
          }
      });
  });
};

// Login endpoint// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists in the database
  const sql = 'SELECT * FROM Users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
      if (err) {
          console.error('Error querying database:', err);
          return res.status(500).json({ message: 'Server error' });
      }

      // Check if user was found
      if (result.length === 0) {
          return res.status(404).json({ message: 'User not found or invalid credentials' });
      }

      // User found, return user data
      const user = result[0];
      res.json({ id: user.id, email: user.email });
  });
});


app.post('/create-checkout-session', async (req, res) => {
  const { cart } = req.body;
  try {
    const lineItems = cart.map(item => ({
      price_data: {
        currency: 'INR',
        
        product_data: {
          name: item.title,
          images: ['frontend'+item.img],
        },
        unit_amount: item.price * 100, // convert price to cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:4242/h/success', // e.g., 'http://localhost:3000/success'
      cancel_url: 'http://localhost:4242/h/cart', // e.g., 'http://localhost:3000/cart'
    });

    res.send({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gokulramesh033@gmail.com',
    pass: 'wqzj lgld pmso zsoy'
  }
});

app.post('/send-email', (req, res) => {
  const { email, orderId } = req.body;

  const mailOptions = {
    from: 'gokulramesh033@gmail.com', // Sender's email address
    to: email,
    subject: 'Order Confirmation',
    text: `Your order with ID ${orderId} has been confirmed. Thank you for shopping with us!`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
