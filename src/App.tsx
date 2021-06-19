import React, { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map';
import { loadMapApi } from './utils/GoogleMapsUtils';

function App() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    // validate that the maps script has been loaded to the dom
    googleMapScript.addEventListener('load', function () {
        setScriptLoaded(true);
    });
  }, []);

  return (
    <div className="App">
      {scriptLoaded && (
        <Map 
          mapType={google.maps.MapTypeId.ROADMAP} 
          mapTypeControl={true} />
      )}
    </div>
  );
}

export default App;

