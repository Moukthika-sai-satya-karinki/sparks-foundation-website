import React from "react";
import '../../App.css';

import background from './background.jpg';

export default function Donate() {
   return(
    <div className="main">
 
    <img className='image' src={background} alt="background" />
    <p  className="para">MAKE THIS WORLD </p>
   
    <h2 className="para2">A Better Place</h2>
   
    <div className="alignbutton">
  <a href="https://rzp.io/l/MZcVSgdrt" rel="noreferrer" >
          <button className="button1" >Donate Now</button>
        </a>
    </div>
    </div>

    
    )

}