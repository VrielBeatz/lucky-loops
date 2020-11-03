import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link, useLocation } from 'react-router-dom';
import Wave from '../../Waveform/Waveform';

const LoopItem = ({
   loopName,
   loopKey,
   loopBpm,
   loopURL,
   loopCategory,
   loopGenre,
   loopSize,
   loopDesc,
   id,
   setCurrentPlaying,
   currentPlaying,
   number,
   authorName,
   authorAvatar,
}) => {
   const [playing, setPlay] = useState(false);

   const location = useLocation();

   useEffect(() => {
      if (currentPlaying !== number) {
         setPlay(false);
      }
   }, [currentPlaying]);

   const handlePlay = () => {
      setCurrentPlaying(number);
      setPlay((prev) => !prev);
   };

   const handleUpperCase = (word, sep = '-') => {
      if (word.includes(sep)) {
         const w = word.indexOf(sep);
         const wordUppercased =
            word.charAt(0).toUpperCase() +
            word.slice(1, w) +
            ' ' +
            word.charAt(w + 1).toUpperCase() +
            word.slice(w + 2);

         return wordUppercased;
      } else return word.charAt(0).toUpperCase() + word.slice(1);
   };

   return (
      <div className='loopItem'>
         <div className='loop-head' onClick={handlePlay}>
            <div
               // onClick={handlePlay}
               className={playing ? 'loop-number playing' : 'loop-number'}
            >
               <span>{number}</span>
               <button className='play-button'>
                  {playing ? (
                     <i className='far fa-pause-circle'></i>
                  ) : (
                     <i className='far fa-play-circle'></i>
                  )}
               </button>
            </div>
            <div className='loop-author'>
               <div className='author-avatar'>
                  <img src={authorAvatar} alt='author' />
                  <div className='avatar-content'></div>
               </div>
               <div className='loop-info'>
                  <div className={playing ? 'loop-name playing' : 'loop-name'}>
                     <Link
                        to={`${
                           location.pathname
                        }/details/${id}/${loopName
                           .toLowerCase()
                           .split(' ')
                           .join('-')}`}
                     >
                        {loopName}
                     </Link>
                  </div>
                  <div className='author-name'>
                     <span>
                        by <Link to='/'>{authorName}</Link>
                     </span>

                     <i className='fas fa-circle divid'></i>

                     <span className='loop-bpm'>{loopBpm}BPM</span>

                     <i className='fas fa-circle divid'></i>

                     <span className='loop-key'>
                        <i className='fas fa-music'></i>{' '}
                        {handleUpperCase(loopKey)}
                     </span>
                     <i className='fas fa-circle divid'></i>
                     <span className='loop-bpm'>
                        {handleUpperCase(loopGenre)}
                     </span>

                     <i className='fas fa-circle divid'></i>

                     <span className='loop-bpm'>
                        {handleUpperCase(loopCategory)}
                     </span>
                  </div>
               </div>
            </div>
            {/* <div className='loop-body'>
               <div className='flex'>
                 
                  <div className='loop-buttons'>
                     <div className='loop-download'></div>
                  </div>
               </div>
            </div> */}
         </div>
         <div className='waves'>
            <Wave
               setCurrentPlaying={setCurrentPlaying}
               currentPlaying={currentPlaying}
               setPlay={setPlay}
               playing={playing}
               url={loopURL}
               number={number}
            />
         </div>

         <div className='loop-tags'>
            <p>Tags</p>
         </div>
      </div>
   );
};

export default LoopItem;
