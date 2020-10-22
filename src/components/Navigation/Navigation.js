import React from 'react';
import './styles.scss';
import NavigationOption from './NavigationOption/NavigationOption';

const Navigation = () => {
   const navigationOptions = [
      {
         path: '/dashboard/loops',
         displayPathName: 'Loops / Samples',
      },
      {
         path: '/dashboard/acapellas',
         displayPathName: 'Acapellas',
      },
   ];
   return (
      <div className='navigation'>
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
