import React, { useContext } from 'react';
import { Route, Switch, useLocation, __RouterContext } from 'react-router-dom';
import Header from './components/Header/Header';

import Dashboard from './pages/Dashboard/Dashboard';
import Homepage from './pages/Homepage/Homepage';

const App = () => {
   // const { location } = useContext(__RouterContext)

   return (
      <>
         <Header />

         <Switch>
            <Route exact path='/' component={Homepage} />

            <Route path='/dashboard' component={Dashboard} />
            <Route render={() => <div>404 Not found</div>} />
         </Switch>
      </>
   );
};

export default App;
