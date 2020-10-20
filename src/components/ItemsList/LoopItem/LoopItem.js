import React, { useEffect } from 'react';
import './styles.scss';
import authorAvatar from '../../../assets/img/author.jpg';
import { Link } from 'react-router-dom';
import Wave from '../../Waveform/Waveform';

const config = {
   loopName: 'Chase',
   authorName: 'Haru436',
   authorAvatar: authorAvatar,
   loopFile: '',
   loopSize: '1.64mb',
   loopDesc:
      'Realized with Fl Studio, Kontakt and Roland PC MK II. Please, send me a link of your work if you use my loop ;)',
};

const LoopItem = ({ url }) => {
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
                     <span className='file-size'>{config.loopSize}</span>
                  </div>
               </div>
            </div>
         </div>

         <div className='loop-body'>
            <div id='waveform' className='waves'>
               <Wave url={url} />
            </div>
            <div className='flex'>
               <div className='description'>
                  <p>Description: {config.loopDesc}</p>
               </div>
               <div className='loop-buttons'>
                  <div className='loop-download'></div>
               </div>
            </div>
         </div>

         <div className='loop-tags'>
            <p>Tags</p>
         </div>
      </div>
   );
};

export default LoopItem;
