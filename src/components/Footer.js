// Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for the footer styling

function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Made by Satvik 22BCT0088. This our online website for selling latest mobile at best prices.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Contact Information</h5>
            <p>123 Street Name, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div className="col-md-3">
            <h5>Legal</h5>
            <p>&copy; {new Date().getFullYear()} Satvik Khurana 22BCT0088</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
