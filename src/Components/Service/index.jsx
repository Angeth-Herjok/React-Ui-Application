import React from 'react';
import'./style.css';


const Service = () => {
  return (
    <div>

       <div className='heading'>
             <div className='firstheading'>
            <h1>Best <span>Delivered</span><br/>Categories</h1>
            </div>

            <div className='secondheaing'>
            <p>Here Are Some of our Best Distributed <br/> Categories. If You Want You Can Order <br/> From Here</p>
            </div>

        </div>

        <div className='serviceimages'>
          
          <div className='serviceimages1'>
            <img src='Images/food-burger.png' alt='pizza' className='bigimage'></img>
            <div className='orderall'>
            <p>Chicken Burger</p>
            <p className='order'>Order Now</p>
            </div>
          </div>

          <div className='serviceimages2'>
            <img src='Images/burger.png' alt='Burgers'></img>
            <div className='orderall'>
            <p>Chicken Pizza</p>
            <p className='order'>Order Now</p>
            </div>
          </div>
          
          <div className='serviceimages3'>
            <img src='Images/fries.png'alt='fry'></img>
            <div className='orderall'>
            <p>French Fries</p>
            <p className='order'>Order Now</p>
            </div>
          </div>

        </div>
    
    </div>
  );
};
export default Service;
