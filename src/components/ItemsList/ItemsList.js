import React from 'react';
import './styles.scss';
import LoopItem from './LoopItem/LoopItem';
import loop1 from '../../assets/audio/loop.wav';
import loop2 from '../../assets/audio/dark.mp3';

const ItemsList = () => {
   return (
      <div className='itemsList'>
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
         <LoopItem url={loop1} />
      </div>
   );
};

export default ItemsList;
