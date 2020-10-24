import React from 'react';
import './styles.scss';

const Button = ({ className = 'button', children, onClick, ...props }) => {
   return (
      <button {...props} onClick={onClick} className={className}>
         {children}
      </button>
   );
};

export default Button;
