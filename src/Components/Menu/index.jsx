import React from 'react';
import'./style.css';


const Menu = () => {
  return (
    <div>

    <div className='menu-heading'>
         <div className='menu-body'>
        <p className='regular'>Our <span>Regular </span>Menu</p>
        <p>These Are Our Regular Menus. You Can<br/> You Can Order Ynything You Like</p>
        </div>

        <div>
        <button className='menu-button'>See All</button>
        </div>

    </div>

    <div className='allimages'>

    <div className='menu-images1'>
        <div> 
        <img src='Images/noddle.png' alt=''></img>
        <p>Chicken Burger</p>
        <p>(160)</p>
        <p>$3.50 <span><button>Buy Now</button></span></p>
        </div> 
        <div> 
        <img src='Images/chickenpizza.png' alt='' className='bigimage'></img>
        <p>Chicken Pizza</p>
        <p>(142)</p>
        <p>$3.50 <span><button>Buy Now</button></span></p>
        </div> 
         
        <div> 
        <img src='Images/chicken_fry.png' alt=''></img>
        <p>Chicken Fry</p>
        <p>(125)</p>
        <p>$5.00 <span><button>Buy Now</button></span></p>
        </div> 

    </div>


     <div className='menu-images2'>
         
         <div>
        <img src='Images/noddle.png' alt='noddle'></img>
        <p>Grill Sandwich</p>
        <p>(112)</p>
        <p>$4.80 <span><button>Buy Now</button></span></p>
        </div> 
         
        <div> 
        <img src='Images/BeefTacos.png' alt='tacos'></img>
        <p>Taco Troifi</p>
        <p>(152)</p>
        <p>$3.63 <span><button>Buy Now</button></span></p>
        </div> 
          
        <div> 
        <img src='Images/sandwich.png' alt='sandwich'></img>
        <p>Noodle's Roman</p>
        <p>(163)</p>
        <p>$6.50 <span><button>Buy Now</button></span></p>
        </div> 

    </div>

    </div>
    
    </div> 
  );
};
export default Menu;
