// pages/getstarted.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './getstarted.scss';

function GetStarted() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup data:', formData);
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? {/*<Link to="/signin"*/}Sign In{/*</Link>*/}</p>
        </div>
    );
}


export default GetStarted
