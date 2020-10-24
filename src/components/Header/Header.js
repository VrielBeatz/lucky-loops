import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import LinkButton from '../LinkButtons/LinkButton';

const Header = () => {
   return (
      <>
         <div style={{ height: 82 }}></div>
         <div className='header'>
            <div className='header-wrapper'>
               <div className='header-left'>
                  <div className='header-logo'>
                     <Link to='/'>Lucky Loops</Link>
                  </div>
               </div>
               <div className='header-right'>
                  <LinkButton to='sign-in'>Sign in</LinkButton>
                  <LinkButton to='sign-up'>Sign up</LinkButton>
               </div>
            </div>
         </div>
      </>
   );
};

export default Header;
