import React from "react";
import '../../App.css';
import background from './background.jpg';
import insta from './instagram.png';
import linkedin from './linkedin.png';


export default function Contact() {
    return(
 <div className="main">
    
    <img className='image' src={background} alt="background" />
    <p className="contact">Task-3 Web Development : Payment Gateway Integration<br/>Sparks Foundation </p>
    <p className="contact1">Built by:Moukthika K.S.S <br/>Email:121910305035@gitam.in</p>
    <p className="contact2">The website is called LetEarthLive which is based on a concept of saving the environment 
    <br/>with an hope of manifesting a better future</p>
    <h3 className="contact3">Find me at the below handles:</h3>
  <div className="align">
    <a href="https://www.instagram.com/_moukthika_/">
    <img src={insta} alt=""/>
   </a>
   <a href="https://www.linkedin.com/in/moukthika-karinki-s-s-602404215">
    <img src={linkedin} alt=""/>
   </a>
   </div>
  
    </div>
    )
}