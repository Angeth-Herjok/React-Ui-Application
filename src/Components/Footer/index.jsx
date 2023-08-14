import React, { useState, useEffect } from "react";
import "./style.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="foot-detail1">
      <h1>Fooodish</h1>
      <p>Continue Foodish 2023 all rights reserved</p>
      <h1>Follow Us On</h1>
      <p><ion-icon name="logo-pinterest"></ion-icon></p>
      <p><ion-icon name="logo-instagram"></ion-icon></p>
      <p><ion-icon name="logo-twitter"></ion-icon></p>
      <p><ion-icon name="logo-facebook"></ion-icon></p>
      </div>

      <div className="foot-detail2">
      <h1>Menu</h1>
      <p>Home</p>
      <p>Offers</p>
      <p>Service</p>
      <p>About Us</p>
      </div>

      <div className="foot-detail3">
      <h1>Information</h1>
      <p>Quality</p>
      <p>Make a Choice</p>
      <p>Salad With Vegetable</p>
      <p>Fast Delivery</p>
      <p>Subscribe</p>
      </div>

      <div className="foot-detail4">
      <h1>Contact</h1>
      <p>+123 456 789</p>
      <p>Explore</p>
      <p>Info@Foodish.Com</p>
      <p>1245, New York, USA</p>
      </div>

    </footer>
  );
};

export default Footer;