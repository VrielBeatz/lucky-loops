import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      <li className={active ? 'active-link' : 'non-active-link'}>
         <Link to={path}>{displayPathName}</Link>
      </li>
   );
};

export default NavigationOption;
