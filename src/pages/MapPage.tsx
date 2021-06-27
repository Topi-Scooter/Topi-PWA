import React, { useEffect, useState, useRef, ReactElement } from 'react';
import Map from '../components/Map';
import { loadMapApi } from '../utils/GoogleMapsUtils';
import { BottomMenu } from '../components/BottomMenu';
import { TopMenu } from '../components/TopMenu';

interface Props {
    
}

export function MapPage(props: Props): ReactElement {
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
        <div>
            {scriptLoaded && ( <Map mapId={mapStyle.current} /> )}
            <TopMenu/>
            <BottomMenu  onChangeMapStyle={handleMapsStyleUpdate}/>
        </div>
    )
}