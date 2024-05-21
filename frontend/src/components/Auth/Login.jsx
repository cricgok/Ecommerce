import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios'; 

const Login = ({ setUserEmail }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleLogin = (email) => {
        console.log('Logged in successfully');
        setUserEmail(email);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/login', formData);
            console.log('Login successful:', res.data);
            handleLogin(email); // Call handleLogin after successful login
            navigate('/h');
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message || 'Unknown error');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p className="forgot-pass">Forgot Password?</p>
            <p className="signup-link">New user? <Link to="/signup">Sign up here</Link></p>
        </div>
    );
};

export default Login;
