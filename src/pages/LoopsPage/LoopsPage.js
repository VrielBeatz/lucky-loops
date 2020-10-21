import React from 'react';
import './styles.scss';
import ItemsList from '../../components/ItemsList/ItemsList';
import AbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';

const LoopsPage = () => {
   return (
      <AbsoluteWrapper>
         <div className='loopsPage-wrapper'>
            <h2>Loops / Samples</h2>
            <div className='loops-container'>
               <ItemsList />
            </div>
         </div>
      </AbsoluteWrapper>
   );
};

export default LoopsPage;
