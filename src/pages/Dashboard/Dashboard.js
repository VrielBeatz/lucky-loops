import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoopsPage from '../../pages/LoopsPage/LoopsPage';

const Homepage = () => {
   return (
      <div className='page-container'>
         <Navigation />
         <h1>Dashboard</h1>

         <Switch>
            <Route path='/loops' component={LoopsPage} />
         </Switch>
      </div>
   );
};

export default Homepage;
