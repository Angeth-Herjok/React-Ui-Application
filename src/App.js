import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Menu from './Components/Menu';
import Service from './Components/Service';
import Discount from './Components/Discount';


function App() {
  return (
    <div>

    <Navigation/>
    <HomePage/>
    <Service/>
    <Menu/>
    <Discount/>
    <Footer/>
      
    </div>
    
  );
}

export default App;
