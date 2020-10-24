import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children, x = 0, y = 0 }) {
   useEffect(() => {
      const unlisten = history.listen(() => {
         window.scrollTo(x, y);
      });
      return () => {
         unlisten();
      };
   }, []);

   return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
