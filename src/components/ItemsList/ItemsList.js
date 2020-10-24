import React, { useState } from 'react';
import './styles.scss';
import LoopItem from './LoopItem/LoopItem';

const ItemsList = ({ loops }) => {
   const [currentPlaying, setCurrentPlaying] = useState(2);
   return (
      <div className='itemsList'>
         {loops.map((props, i) => (
            <LoopItem
               key={i}
               number={i + 1}
               currentPlaying={currentPlaying}
               setCurrentPlaying={setCurrentPlaying}
               id={i}
               {...props}
            />
         ))}
      </div>
   );
};

export default ItemsList;
