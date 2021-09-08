// Docs: https://storksnestblog.wordpress.com/2020/08/16/setting-up-google-maps-with-react-typescript/
import React, {useEffect, useRef, useState} from 'react';
import './Map.scss';

interface IMapProps {
    mapId: string;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;
const cmuPosition = { lat: 39.081098, lng: -108.554785 }; // TODO move to better place
const zoom = 16; // TODO move to better place

const Map: React.FC<IMapProps> = ({ mapId }) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<GoogleMap>();

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if (ref.current) {
            setMap(
                new google.maps.Map(ref.current, {
                    zoom: zoomLevel,
                    center: address,
                    mapId: mapId,
                    mapTypeControl: false,
                    streetViewControl: false,
                    scaleControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    zoomControl: false,
                })
            );
        }
    };
    const defualtMapStart = (): void => {
        const defaultAddress = new google.maps.LatLng(cmuPosition)
        initMap(zoom, defaultAddress)
    };

    useEffect((): void => {
        if (!map) {
            defualtMapStart()
        }
    }, [map]);

    return (
        <div className="map-container">
            <div ref={ref} className="map-container__map"></div>
        </div>
    );
};

export default Map;