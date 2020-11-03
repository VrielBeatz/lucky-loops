import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import LinkButton from '../LinkButtons/LinkButton';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebaseUtils';
import Button from '../Button/Button';
import { primaryColor, secondaryColor } from '../../colors/colors';

const Header = () => {
   const { currentUser } = useSelector(({ user }) => ({
      currentUser: user.currentUser,
   }));
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
                  {!currentUser ? (
                     <div style={{ display: 'flex' }}>
                        <LinkButton color={secondaryColor} to='sign-up'>
                           Sign up
                        </LinkButton>
                        <LinkButton color={primaryColor} to='sign-in'>
                           Sign in
                        </LinkButton>
                     </div>
                  ) : (
                     <div className='loggedIn'>
                        <Button
                           onClick={() => {
                              auth.signOut();
                           }}
                        >
                           Log out
                        </Button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default Header;
