import React from 'react';
import './styles.scss';
import LoopItem from './LoopItem/LoopItem';

const ItemsList = () => {
   return (
      <div className='itemsList'>
         <LoopItem />
      </div>
   );
};

export default ItemsList;
