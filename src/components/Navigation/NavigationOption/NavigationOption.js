import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles.scss';

const NavigationOption = ({ path, displayPathName }) => {
   const [active, setActive] = useState(false);

   const location = useLocation();

   useEffect(() => {
      if (location.pathname === path) {
         setActive(true);
      }
      return () => {
         setActive(false);
      };
   }, [location.pathname]);
   return (
      <li className='nav-link'>
         <NavLink
            exact
            className='link'
            activeClassName='link active'
            to={path}
         >
            {displayPathName}
         </NavLink>
      </li>
   );
};

export default NavigationOption;
