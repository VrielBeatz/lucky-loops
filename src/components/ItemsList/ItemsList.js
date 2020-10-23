import React, { useState } from 'react';
import './styles.scss';
import LoopItem from './LoopItem/LoopItem';
import loop1 from '../../assets/audio/loop.wav';
import loop2 from '../../assets/audio/dark.mp3';
import authorAvatar from '../../assets/img/author.jpg';

const loops = [
   {
      loopName: 'Chase',
      authorName: 'Haru436',
      authorAvatar: authorAvatar,
      loopKey: 'F#',
      loopBpm: 120,
      loopGenre: 'hip-hop',
      loopCategory: 'sitar',
      loopURL: loop1,
      loopSize: '1.64mb',
      loopDesc:
         'Realized with Fl Studio, Kontakt and Roland PC MK II. Please, send me a link of your work if you use my loop ;)',
   },
   {
      loopName: 'Chase',
      authorName: 'Haru436',
      authorAvatar: authorAvatar,
      loopKey: 'F#',
      loopBpm: 120,
      loopGenre: 'hip-hop',
      loopCategory: 'sitar',
      loopURL: loop1,
      loopSize: '1.64mb',
      loopDesc:
         'Realized with Fl Studio, Kontakt and Roland PC MK II. Please, send me a link of your work if you use my loop ;)',
   },
   {
      loopName: 'Chase',
      authorName: 'Haru436',
      authorAvatar: authorAvatar,
      loopKey: 'F#',
      loopBpm: 120,
      loopGenre: 'hip-hop',
      loopCategory: 'sitar',
      loopURL: loop1,
      loopSize: '1.64mb',
      loopDesc:
         'Realized with Fl Studio, Kontakt and Roland PC MK II. Please, send me a link of your work if you use my loop ;)',
   },
   {
      loopName: 'Chase',
      authorName: 'Haru436',
      authorAvatar: authorAvatar,
      loopKey: 'F#',
      loopBpm: 120,
      loopGenre: 'hip-hop',
      loopCategory: 'sitar',
      loopURL: loop1,
      loopSize: '1.64mb',
      loopDesc:
         'Realized with Fl Studio, Kontakt and Roland PC MK II. Please, send me a link of your work if you use my loop ;)',
   },
];

const ItemsList = () => {
   const [currentPlaying, setCurrentPlaying] = useState(2);
   return (
      <div className='itemsList'>
         {loops.map((props, i) => (
            <LoopItem
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
