import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import './getstarted.scss';

function getstarted() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://your-api-url.com/signup', formData);
            console.log('Signup response:', response.data);
            // Redirect or perform any action after successful signup
            history.push('/signin');
        } catch (err) {
            setError(err.response ? err.response.data.message : 'An error occurred');
        }
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
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
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
        </div>
    );
}

