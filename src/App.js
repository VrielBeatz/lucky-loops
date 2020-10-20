import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

import Dashboard from './pages/Dashboard/Dashboard';
import Homepage from './pages/Homepage/Homepage';

const App = () => {
   return (
      <BrowserRouter>
         <Header />
         <Switch>
            <Route exact path='/' component={Homepage} />

            <Route path='/dashboard' component={Dashboard} />
            <Route render={() => <div>404 Not found</div>} />
         </Switch>
      </BrowserRouter>
   );
};

export default App;
