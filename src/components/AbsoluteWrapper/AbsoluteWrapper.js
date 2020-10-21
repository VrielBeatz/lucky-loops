import React from 'react';

const AbsoluteWrapper = ({ children }) => {
   return (
      <div style={{ position: 'absolute', width: '100%', paddingTop: 25 }}>
         {children}
      </div>
   );
};

export default AbsoluteWrapper;
