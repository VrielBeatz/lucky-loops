import React from 'react';
import './styles.scss';
import { useTransition, animated } from 'react-spring';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

import Navigation from '../../components/Navigation/Navigation';
import { Route, Switch, useLocation } from 'react-router-dom';
import LoopsPage from '../../pages/LoopsPage/LoopsPage';
import AbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';
import bannerVid from '../../assets/videos/banner.mp4';

import Filters from '../../components/Filters/Filters';
import ItemList from '../../components/ItemsList/ItemsList';

const Acapellas = () => {
   return (
      <AbsoluteWrapper>
         <h1>Acapellas</h1>
         <ItemList />
      </AbsoluteWrapper>
   );
};

const Beats = () => {
   return (
      <AbsoluteWrapper>
         <h1>Beats</h1>
      </AbsoluteWrapper>
   );
};

const Dashboard = () => {
   const location = useLocation();
   const transitions = useTransition(
      location,
      (location) => location.pathname,
      {
         from: { opacity: 0 },
         enter: { opacity: 1 },
         leave: { opacity: 0 },
      }
   );
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
                  {transitions.map(({ item, props, key }) => (
                     <animated.div key={key} style={props}>
                        <ScrollToTop>
                           <Switch location={item}>
                              <Route
                                 path='/dashboard/loops'
                                 component={LoopsPage}
                              />
                              <Route
                                 path='/dashboard/acapellas'
                                 component={Acapellas}
                              />
                              <Route
                                 path='/dashboard/beats'
                                 component={Beats}
                              />
                           </Switch>
                        </ScrollToTop>
                     </animated.div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
