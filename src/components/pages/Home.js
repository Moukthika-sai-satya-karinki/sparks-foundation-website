import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import bgvideo from './video.mp4'


function Home () {
    return (
       <div className='main'>
        <video src={bgvideo} autoPlay loop muted id='video'/>
       <div className='center'>
        <Link to='/donate'>
        <button className='button'>Donate Here</button>
        </Link>
        </div>
      </div>
           
    )
}

export default Home;