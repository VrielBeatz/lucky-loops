import React from 'react';
import './styles.scss';
import { useTransition, animated } from 'react-spring';

import Navigation from '../../components/Navigation/Navigation';
import { Route, Switch, useLocation } from 'react-router-dom';
import LoopsPage from '../../pages/LoopsPage/LoopsPage';
import AbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';

import Filters from '../../components/Filters/Filters';

const Acapellas = () => {
   return (
      <AbsoluteWrapper>
         <h1>Acapellas</h1>
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
         from: { opacity: 0, transform: 'translateX(100%)' },
         enter: { opacity: 1, transform: 'translateX(0%)' },
         leave: { opacity: 0, transform: 'translateX(-50%)' },
      }
   );
   return (
      <div className='dashboard-container page-container'>
         <div className='dashboard-wrapper'>
            <div className='dashboard-left'>
               <Filters />
            </div>
            <div className='dashboard-right'>
               <Navigation />
               {transitions.map(({ item, props, key }) => (
                  <animated.div key={key} style={props}>
                     <Switch location={item}>
                        <Route path='/dashboard/loops' component={LoopsPage} />
                        <Route
                           path='/dashboard/acapellas'
                           component={Acapellas}
                        />
                        <Route path='/dashboard/beats' component={Beats} />
                     </Switch>
                  </animated.div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
