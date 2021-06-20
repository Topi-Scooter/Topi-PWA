import React, { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map';
import { loadMapApi } from './utils/GoogleMapsUtils';

function App() {
  const nightTheme : string = "a4157e9a5c74ff29"
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
          mapId={nightTheme}
          mapTypeControl={true}
        />
      )}
    </div>
  );
}

export default App;

