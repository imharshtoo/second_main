import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
let navigate = useNavigate();
const [credentials, setCredentials] = useState({ email: "", password: "" });

const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    // Retrieve stored user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
    // Check if email and password match
    if (storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        // Redirect to home page
        localStorage.setItem("harsh","8810346985");
        navigate('/');
    } else {
        alert('Invalid email or password');
    }
    } else {
    alert('No user found. Please sign up first.');
    }
};

const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
    const emailValid = e.target.value.includes('@gmail.com');
    if (!emailValid) {
        console.log('Email must be a @gmail.com address');
    }
    }
};

return (
    <div className='container mt-3'>
    <h2>Login to continue </h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" onChange={onChange} value={credentials.password} className="form-control" id="password" name='password' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
);
};

export default Login;
