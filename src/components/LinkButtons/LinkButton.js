import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Button = ({ to = '/', children, color, backgroundColor, ...props }) => {
   return (
      <Link
         to={to}
         {...props}
         style={{ color: color, backgroundColor: backgroundColor }}
         className='btn'
      >
         {children}
      </Link>
   );
};

export default Button;
