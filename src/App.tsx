import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import './App.scss';
import { MapPage } from './pages/MapPage'

function App() {
  return (
    <div className="App">
      <MapPage/>
      {/* TODO move sign out button*/}
      {/*<AmplifySignOut /> */}
      
    </div>
  );
}

export default withAuthenticator(App);

