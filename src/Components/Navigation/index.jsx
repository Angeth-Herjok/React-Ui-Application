import React from 'react';
import'./style.css';


const Navigation = () => {
  return (
    <div className='navbar'>
    <nav>
    <h1 className='logo'>Foodle</h1>
      <ul>
     
        <li>
          <a href="/HomePage">Home</a>
        </li>
        <li>
          <a href="/FoodOffers">Offer</a>
        </li>
        <li>
          <a href="/Service">Service</a>
        </li>
        <li>
          <a href="/Menu">Menu</a>
        </li>
        <li>
          <a href="/AboutPage">About Us</a>
        </li>
        <li className='login'>Login</li>
        <button className="signup-button">Sign Up</button>
      </ul>
    </nav>
    </div>
  );
};
export default Navigation;
