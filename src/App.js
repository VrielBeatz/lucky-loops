import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

import Dashboard from './pages/Dashboard/Dashboard';
import Homepage from './pages/Homepage/Homepage';
import Loop from './components/Loop/Loop';
import LoopsPage from './pages/LoopsPage/LoopsPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';

const App = () => {
   return (
      <>
         <Header />
         <ScrollToTop>
            <Switch>
               <Route exact path='/' component={Homepage} />

               {/* <Route path='/dashboard' component={Dashboard} /> */}
               <Route exact path='/loops' component={LoopsPage} />
               <Route exact path='/loops/:filterType' component={LoopsPage} />
               <Route path='/loops/details/:id/:name' component={Loop} />
               <Route exact path='/sign-in' component={SignIn} />
               <Route exact path='/sign-up' component={SignUp} />
               <Route>
                  <div>404 not found</div>
               </Route>
            </Switch>
         </ScrollToTop>
      </>
   );
};

export default App;
