import React from 'react';
import'./style.css';



const HomePage = () => {
  return (
    <div className='body'>
     
     <div className='homeheading'>

     <div className='firstpart'>

      <div className='allfast'>
        <p>All Fast Food is <br/> Available at Foodle.</p>
      </div>

      <div className='person'>
            <img src='Images/person.png' alt='' className='personimage'></img>
            <p>We Are Just A Click Away When You<br/>Crave For Delicious Fast Food</p>
      </div>
          
      <div className='buttonpart'>

        <div>
        <button>Buy Now</button>
        </div>
        
        <div>
        <p>How To Order</p>
        </div>

      </div>

      </div>

     <div className='imagepart'>

     <img src='Images/Sandwich-rem.png' alt='sandwich'></img>

     </div>

        </div>

        <div className='bodypart'>
       
       <div>
        <h1>Fast Delivery</h1>
        <p>The Food Will Be Delivered To <br/> Your Home Within 1-2 Hours Of <br/>Your Ordering.</p>
        </div>

        <div>
            <h1>Fresh Food</h1>
            <p>Your Food Will Be Delivered<br/> 100% Fresh TO Your Home. We <br/> Do Not Deliver State Food</p>
        </div>

        <div>
            <h1>Free Delivery</h1>
            <p>Your Food Delivery Is<br/> Absolutely Free.No Cast <br/>Just Order And Enjoy</p>
        </div>
       
        </div>
       
    </div>
  );
};
export default HomePage;
