import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigationOption from './NavigationOption/NavigationOption';

const Navigation = () => {
   const navigationOptions = [
      {
         path: '/loops',
         displayPathName: 'Loops / Samples',
      },
      {
         path: '/acapellas',
         displayPathName: 'Acapellas',
      },
      {
         path: '/beats',
         displayPathName: 'Beats',
      },
   ];
   return (
      <div>
         <ul>
            {navigationOptions.map(({ path, displayPathName }) => (
               <NavigationOption
                  path={path}
                  displayPathName={displayPathName}
               />
            ))}
         </ul>
      </div>
   );
};

export default Navigation;
