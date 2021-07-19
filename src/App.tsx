import React,{ useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { MapPage, ProfilePage, PaymentPage, SettingsPage } from './pages';

import { AppReducer } from './state/reducer';
import { initialAppState } from './state/state';
import { AppContext } from './state/context';



function App() { 
  const [state, dispatch] = useReducer(AppReducer, initialAppState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <MapPage/>}/>
          <Route exact path="/profile" render={props => <ProfilePage/>}/>
          <Route exact path="/payment" render={props => <PaymentPage/>}/>
          <Route exact path="/settings" render={props => <SettingsPage/>}/>
          <Route exact path="/logout" render={props => <AmplifySignOut/>}/>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default withAuthenticator(App);

