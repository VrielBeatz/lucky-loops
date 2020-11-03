import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import headVideo from '../../assets/videos/home.mp4';

const Homepage = () => {
   return (
      <div className='homepage'>
         <div className='homepage-wrapper'>
            <div className='homepage-head'>
               <div className='head-content'>
                  <h1>
                     Looking for quality loops and samples for your project?
                  </h1>
                  <Link to='/loops'>Go to your Dashboard</Link>
               </div>

               <video
                  autoPlay
                  muted
                  loop
                  className='head-video'
                  src={headVideo}
               ></video>
            </div>
         </div>
      </div>
   );
};

export default Homepage;
