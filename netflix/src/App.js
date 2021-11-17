import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages/index';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import {firebase} from './lib/firebase.prod';

function App() {
  const { user } = useAuthListener();
  // const user = null;
  useEffect(() => {
    // firebase.auth().signOut();
  }, [])
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN} exact>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP} exact>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
