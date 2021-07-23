import React, { useEffect, useState, useRef, ReactElement, useContext } from 'react';
import Map from '../components/Map';
import { loadMapApi } from '../utils/GoogleMapsUtils';
import { BottomMenu } from '../components/BottomMenu';
import { TopMenu } from '../components/TopMenu';
import { AppContext } from '../state/context';
import { setMapLoaded } from '../state/reducer';

interface Props {
    
}
// TODO access api: https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-four/?e=gs2020&p=build-a-react-app-three
export default function MapPage(props: Props): ReactElement {
    const googleMapsStyles = {
        default : "", // Empty string set map to default google street map
        dark : "a4157e9a5c74ff29",
        light : "", // TODO create light style
    }
    const { state, dispatch } = useContext(AppContext)
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
            dispatch(setMapLoaded(true));
        });

        return () => { //cleanup
            googleMapScript.removeEventListener('load', function () {
                dispatch(setMapLoaded(true));
            });
        }
    }, [dispatch]);
    
    return (
        <div>
            {state.app.mapIsLoaded && ( <Map mapId={mapStyle.current} /> )}
            <TopMenu/>
            <BottomMenu  onChangeMapStyle={handleMapsStyleUpdate}/>
        </div>
    )
}
