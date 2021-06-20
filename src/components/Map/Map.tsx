import React, {useEffect, useRef, useState} from 'react';
import './Map.scss';

interface IMapProps {
    mapId: string;
    mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;
const cmuPosition = { lat: 39.081098, lng: -108.554785 }; // TODO move to better place
const zoom = 16; // TODO move to better place

const Map: React.FC<IMapProps> = ({ mapId, mapTypeControl = false }) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<GoogleMap>();

    console.log(process.env.GOOGLE_MAP_STYLE)

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if (ref.current) {
            setMap(
                new google.maps.Map(ref.current, {
                    zoom: zoomLevel,
                    center: address,
                    mapTypeControl: mapTypeControl,
                    mapId: mapId,
                    streetViewControl: false,
                    scaleControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    zoomControl: true,
                })
            );
        }
    };
    const defualtMapStart = (): void => {
        const defaultAddress = new google.maps.LatLng(cmuPosition)
        initMap(zoom, defaultAddress)
    };
    const startMap = (): void => {
        if (!map) {
            defualtMapStart()
        }
    };
    useEffect(startMap, [map]);

    return (
        <div className="map-container">
            <div ref={ref} className="map-container__map"></div>
        </div>
    );
};

export default Map;