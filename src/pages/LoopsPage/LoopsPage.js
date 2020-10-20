import React from 'react';
import './styles.scss';
import ItemsList from '../../components/ItemsList/ItemsList';

const LoopsPage = () => {
   return (
      <div className='loopsPage-wrapper'>
         <h2>Loops / Samples</h2>
         <div className='loops-container'>
            <ItemsList />
         </div>
      </div>
   );
};

export default LoopsPage;
