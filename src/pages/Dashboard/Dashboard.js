import React from 'react';
import './styles.scss';

import Navigation from '../../components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import LoopsPage from '../../pages/LoopsPage/LoopsPage';
import CatSelect from '../../components/Filters/CatSelect/CatSelect';

const config = {
   label: 'Genre',
   dataName: 'genre',
   displayed: 4,
   data: [
      {
         displaName: 'All Genre',
         name: 'all-genre',
      },
      {
         displaName: 'Hip Hop',
         name: 'hip-hop',
      },
      {
         displaName: 'Cinematics',
         name: 'cinematics',
      },
      {
         displaName: 'Techno',
         name: 'techno',
      },
      {
         displaName: 'Techno',
         name: 'ts',
      },
      {
         displaName: 'Techno',
         name: 'tg',
      },
      {
         displaName: 'Techno',
         name: 'ty',
      },
   ],
};
const config1 = {
   label: 'Categories',
   dataName: 'categories',
   displayed: 1,
   data: [
      {
         displaName: 'All',
         name: 'all-categories',
      },
      {
         displaName: 'Sitar',
         name: 'sitar',
      },
   ],
};
const Dashboard = () => {
   return (
      <div className='dashboard-container page-container'>
         <div className='dashboard-wrapper'>
            <div className='dashboard-left'>
               <div className='filters'>
                  <CatSelect config={config} />
                  <CatSelect config={config1} />
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
