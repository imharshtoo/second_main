import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Fetch user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Check if the email matches
        if (storedUser && storedUser.email === email) {
            // Update the password
            storedUser.password = newPassword;
            localStorage.setItem('user', JSON.stringify(storedUser));
            setMessage('Password has been successfully updated.');
        } else {
            setMessage('Email not found.');
        }

        // Reset the input fields
        setEmail('');
        setNewPassword('');
    };

    return (
        <div className="forgot-password" >
            <h2 style={{marginBottom:"1cm"}}>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email : 
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <label style={{margin:"0.2cm"}}>
                    New Password :
                    <input 
                        type="password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        required 
                        minLength={5}
                    />
                </label>
                <button type="submit" style={{margin:"1cm", backgroundColor:"lightgreen",border:"1px solid black",padding:"0.1cm"}}>Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
