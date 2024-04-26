import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={navStyle}>
            <div style={containerStyle}>
                <div style={logoStyle}>
                    <Link to="/" style={linkStyle}>Satvik Khurana</Link>
                </div>
                <ul style={navLinksStyle}>
                    <li style={navItemStyle}><a href="/pages/login.html" style={linkStyle}>Login</a></li>
                    <li style={navItemStyle}><a href="/pages/signup.html" style={linkStyle}>Signup</a></li>
                    <li style={navItemStyle}><a href="/pages/quiz.html" style={linkStyle}>Quiz</a></li>
                    <li style={navItemStyle}><a href="/pages/feedback.html" style={linkStyle}>Feedback</a></li>
                    <li style={navItemStyle}><a href="/pages/registration.html" style={linkStyle}>Registration</a></li>
                    {/* Added cart option */}
                    <li style={navItemStyle}><Link to="/cart" style={linkStyle}>Cart</Link></li>
                </ul>
            </div>
        </nav>
    );
}

// Inline styles
const navStyle = {
    backgroundColor: '#007BFF',  // Blue background
    color: '#fff',  // White text
    padding: '10px 0'
};

const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex', // Added flex
    justifyContent: 'space-between', // Aligns items to the start and end
    alignItems: 'center' // Vertically centers items
};

const logoStyle = {
    flex: '1'
};

const linkStyle = {
    color: '#000',  // Black text
    textDecoration: 'none',
    fontSize: '16px', // Reduced text size
};

const navLinksStyle = {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    alignItems: 'center'
};

const navItemStyle = {
    marginLeft: '20px'
};

export default Navbar;
