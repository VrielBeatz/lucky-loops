import React from 'react';
import './styles.scss';
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
   ];
   return (
      <div className='navigation'>
         <ul>
            {navigationOptions.map(({ path, displayPathName }, i) => (
               <NavigationOption
                  key={i}
                  path={path}
                  displayPathName={displayPathName}
               />
            ))}
         </ul>
      </div>
   );
};

export default Navigation;
