import React from 'react';
import './styles.scss';
import ItemsList from '../../components/ItemsList/ItemsList';
import AbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';
import loop1 from '../../assets/audio/loop.wav';
import authorAvatar from '../../assets/img/author.jpg';
import bannerVid from '../../assets/videos/banner.mp4';
import Navigation from '../../components/Navigation/Navigation';
import Filters from '../../components/Filters/Filters';

export const loops = [
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
      loopName: 'Push to go',
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
      loopName: 'Fight',
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
      loopName: 'Run',
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

const LoopsPage = () => {
   return (
      <div className='dashboard-container page-container'>
         <div className='dashboard-wrapper'>
            <div className='dashboard-left'>
               <div className='options'>
                  <Filters />
               </div>
            </div>
            <div className='dashboard-right'>
               <div className='banner'>
                  <div className='banner-content'>
                     <h2>Get unlimited loops and acapellas for your music</h2>
                     <p>
                        Create stunning music with best royalty-free samples and
                        acapellas
                     </p>
                  </div>
                  <video muted autoPlay loop src={bannerVid}></video>
               </div>
               <div className='dashboard-nav'>
                  <Navigation />
               </div>
               <div className='dashboard-content'>
                  <div className='loopsPage-wrapper'>
                     <h2>Loops / Samples</h2>
                     <div className='loops-container'>
                        <ItemsList loops={loops} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoopsPage;
