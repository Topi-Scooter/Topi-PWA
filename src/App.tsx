import React, { useEffect, useState } from 'react';
import './App.scss';
import Map from './components/Map';
import { loadMapApi } from './utils/GoogleMapsUtils';
import { BottomMenu } from './components/BottomMenu';
import { useRef } from 'react';

function App() {
  const googleMapsStyles = {
    default : "", // Empty string set map to default google street map
    dark : "a4157e9a5c74ff29",
    light : "", // TODO create light style
  }
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const mapStyle = useRef<string>(googleMapsStyles.dark)
  
  const handleMapsStyleUpdate = (newStyle:string) => {
    // TODO handle App wide styles i.e. dark, light, auto(time of day)
    // change map and component styles
    // source to different util file
  }

  useEffect(() => {
    const googleMapScript = loadMapApi();
    // validate that the maps script has been loaded to the dom
    googleMapScript.addEventListener('load', function () {
      setScriptLoaded(true);
    });
  }, []);

  
  
  return (
    <div className="App">
      {scriptLoaded && ( <Map mapId={mapStyle.current} /> )}
      <BottomMenu  onChangeMapStyle={handleMapsStyleUpdate}/>
    </div>
  );
}

export default App;

