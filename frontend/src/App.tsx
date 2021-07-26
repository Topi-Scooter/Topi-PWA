import React,{ useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { MapPage, ProfilePage, PaymentPage, SettingsPage, AboutPage, ContactPage, AdminPage } from './pages';

import { AppReducer, setIsAdmin } from './state/reducer';
import { initialAppState } from './state/state';
import { AppContext } from './state/context';


function App() { 
  const [state, dispatch] = useReducer(AppReducer, initialAppState)
  
  useEffect(() => {
    Auth.currentSession()
      .then(cognitoUser => {
        const groups = cognitoUser.getIdToken().payload['cognito:groups'];
        groups.forEach((group: string) => {
          if (group === "admin") {
            console.log("setting isAdmin = true")
            dispatch(setIsAdmin(true))
          }
        });
      })
  }, [dispatch])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <MapPage/>}/>
          <Route exact path="/profile" render={props => <ProfilePage/>}/>
          <Route exact path="/payment" render={props => <PaymentPage/>}/>
          <Route exact path="/settings" render={props => <SettingsPage/>}/>
          <Route exact path="/contact" render={props => <ContactPage/>}/>
          <Route exact path="/about" render={props => <AboutPage/>}/>
          <Route exact path="/logout" render={props => <AmplifySignOut/>}/>
          <Route exact path="/admin" render={props => state.user.isAdmin ? <AdminPage/> : <div><AmplifySignOut/> <h1>Not Authorized!</h1></div>}/>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default withAuthenticator(App);

