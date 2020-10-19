import React from 'react';
import './styles.scss';

import Navigation from '../../components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import LoopsPage from '../../pages/LoopsPage/LoopsPage';
import CatSelect from '../../components/Filters/CatSelect/CatSelect';

const Dashboard = () => {
   return (
      <div className='dashboard-container page-container'>
         <div className='dashboard-wrapper'>
            <div className='dashboard-left'>
               <div className='filters'>
                  <CatSelect />
               </div>
            </div>
            <div className='dashboard-right'>
               <Navigation />
               <Switch>
                  <Route path='/loops' component={LoopsPage} />
               </Switch>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
