import React from 'react';
import './styles.scss';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

import Navigation from '../../components/Navigation/Navigation';
import { Route, Switch, useLocation, useParams } from 'react-router-dom';
import LoopsPage from '../../pages/LoopsPage/LoopsPage';
import AbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';
import bannerVid from '../../assets/videos/banner.mp4';

import Filters from '../../components/Filters/Filters';
import ItemList from '../../components/ItemsList/ItemsList';
import { loops } from '../LoopsPage/LoopsPage';
import Loop from '../../components/Loop/Loop';

const Acapellas = () => {
   return (
      <AbsoluteWrapper>
         <h1>Acapellas</h1>
         <ItemList loops={loops} />
      </AbsoluteWrapper>
   );
};

const Dashboard = () => {
   const location = useLocation();

   console.log(location.pathname);

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
                  <ScrollToTop>
                     <Switch>
                        <Route
                           exact
                           path='/dashboard/loops'
                           component={LoopsPage}
                        />
                        <Route
                           path='/dashboard/acapellas'
                           component={Acapellas}
                        />
                     </Switch>
                  </ScrollToTop>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
