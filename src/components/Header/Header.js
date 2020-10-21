import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';

const Header = () => {
   return (
      <>
         <div className='header'>
            <div className='header-wrapper'>
               <div className='header-left'>
                  <div className='header-logo'>
                     <Link to='/'>Lucky Loops</Link>
                  </div>
               </div>
               <div className='header-right'>
                  <Button>Button</Button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Header;
