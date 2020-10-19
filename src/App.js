import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

import Dashboard from './pages/Dashboard/Dashboard';
import LoopsPage from './pages/LoopsPage/LoopsPage';

const App = () => {
   return (
      <BrowserRouter>
         <Header />
         <Switch>
            <Route path='/' component={Dashboard} />
            <Route render={() => <div>404 Not found</div>} />
         </Switch>
      </BrowserRouter>
   );
};

export default App;
