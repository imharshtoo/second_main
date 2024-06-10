import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
let navigate = useNavigate();
const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    // Check if the email contains @gmail.com
    if (!email.includes('@gmail.com')) {
    alert('Email must be a @gmail.com address');
    return;
    }

    // Check if passwords match
    if (password !== cpassword) {
    alert('Passwords do not match');
    return;
    }

    // Store user credentials in localStorage
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Account created successfully!');

    // Redirect to login page
    navigate('/login');
};

const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
};

return (
    <div className='container mt-3'>
    <h2 className='my-3'>Create an account</h2>
    <form className='container' onSubmit={handleSubmit}>
        <div className="my-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" onChange={onChange} className="form-control" id="name" aria-describedby="emailHelp" name='name' />
        </div>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" onChange={onChange} className="form-control" id="password" name='password' required minLength={5} />
        </div>
        <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input type="password" onChange={onChange} className="form-control" id="cpassword" name='cpassword' required minLength={5} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
);
};

export default Signup;
