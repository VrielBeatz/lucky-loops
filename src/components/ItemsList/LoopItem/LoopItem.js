import React, { useEffect } from 'react';
import './styles.scss';
import authorAvatar from '../../../assets/img/author.jpg';
import { Link } from 'react-router-dom';
import Wave from '../../Waveform/Waveform';

const LoopItem = ({ url }) => {
   const config = {
      loopName: 'Chase',
      authorName: 'Haru436',
      authorAvatar: authorAvatar,
      loopKey: 'F#',
      loopBpm: 120,
      loopURL: url,
      loopSize: '1.64mb',
      loopDesc:
         'Realized with Fl Studio, Kontakt and Roland PC MK II. Please, send me a link of your work if you use my loop ;)',
   };

   return (
      <div className='loopItem'>
         <div className='loop-head'>
            <div className='loop-number'>
               <span>1</span>
            </div>
            <div className='loop-author'>
               <div className='author-avatar'>
                  <img src={config.authorAvatar} alt='author' />
               </div>
               <div className='loop-info'>
                  <div className='loop-name'>
                     <Link>{config.loopName}</Link>
                  </div>
                  <div className='author-name'>
                     <span>
                        by <Link>{config.authorName}</Link>
                     </span>

                     <i className='fas fa-circle divid'></i>

                     <span className='loop-bpm'>{config.loopBpm}BPM</span>

                     <i className='fas fa-circle divid'></i>

                     <span className='loop-key'>
                        <i className='fas fa-music'></i> {config.loopKey}
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
            <Wave url={config.loopURL} />
         </div>

         <div className='loop-tags'>
            <p>Tags</p>
         </div>
      </div>
   );
};

export default LoopItem;
