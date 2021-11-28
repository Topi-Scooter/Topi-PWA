import React, {useEffect, useRef, useState} from 'react';
import './Map.scss';

interface IMap {
    mapType: google.maps.MapTypeId;
    mapTypeControl?: boolean;
    // setDistanceInKm: React.Dispatch<React.SetStateAction<number>>;
}

interface IMarker {
    address: string;
    latitude: number;
    longitude: number;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;
type GoogleMarker = google.maps.Marker;
type GooglePolyline = google.maps.Polyline;

const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<GoogleMap>();
    const [homeMarker, setHomeMarker] = useState<GoogleMarker>();

    const startMap = (): void => {
        if (!map) {
            defaultMapStart();
        } else {
            const homeLocation = new google.maps.LatLng(39.081098, -108.554785);
            setHomeMarker(addHomeMarker(homeLocation));
            addUserMarker();
            addBikeMarkers();
        }
    };
    
    useEffect(startMap, [map]);

    const defaultMapStart = (): void => {
        const defaultAddress = new google.maps.LatLng(39.081098, -108.554785);
        initMap(16, defaultAddress);
    };
    
    const userIcon: any = {url: 'https://img.icons8.com/ios-glyphs/30/000000/person-male.png',
                           scaledSize: new window.google.maps.Size(25, 25)}
    const bikeIcon: any = {url: 'https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/50/000000/external-bike-vacation-vitaliy-gorbachev-fill-vitaly-gorbachev.png',
                           scaledSize: new window.google.maps.Size(25, 25)}
    const demoIcon: any = {url: 'https://img.icons8.com/material-rounded/24/000000/ok--v1.png',
                           scaledSize: new window.google.maps.Size(25, 25)}

    const addHomeMarker = (location: GoogleLatLng): GoogleMarker => {
        const homeMarkerConst:GoogleMarker = new google.maps.Marker({
            position: location,
            map: map,
            icon: demoIcon
        });

        homeMarkerConst.addListener('click', () => {
            map?.panTo(location);
            map?.setZoom(16);
        });

        return homeMarkerConst;
    };

    const addUserMarker = (): GoogleMarker => {
        async function getUserPosition(){
                    navigator.geolocation.getCurrentPosition(function(userPosition) {
                        const userLocation = new google.maps.LatLng(userPosition.coords.latitude, userPosition.coords.longitude);
                        const userMarker:GoogleMarker = new google.maps.Marker({
                            position: userLocation,
                            map: map,
                            icon: userIcon
                        })

                        userMarker.addListener('click', () => {
                            map?.panTo(userLocation);
                            map?.setZoom(16);
                        });

                        return userMarker;
                    });
                }
                var userLocation: any = getUserPosition();
                return userLocation;
    };

    const addBikeMarkers = (): void => {
        async function getBikeLocations(){
                    // get bike locations from dynamodb
                    const AWS = require("aws-sdk");
                    
                    AWS.config.update({region: "us-east-2",
                                       accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
                                       secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
                                    })
                        
                    const ddb = new AWS.DynamoDB.DocumentClient();
                    const TABLE_NAME = "Bikes";
                    
                    try{
                        const ddb_results = await ddb.scan({
                        TableName: TABLE_NAME
                        }).promise();  
                        console.log("bikeLocations", ddb_results.Items);
                        bikeLocations = ddb_results.Items;
                        bikeLocations.map(function(bike: any, index: any){
                            // console.log("key: ", index, "value: ", bike);
                            var bikeLocation = new google.maps.LatLng(bike.lat, bike.lng);
                            
                            const bikeMarker:GoogleMarker = new google.maps.Marker({
                                position: bikeLocation,
                                map: map,
                                icon: bikeIcon
                            })

                            bikeMarker.addListener('click', () => {
                                map?.panTo(bikeLocation);
                                map?.setZoom(16);
                            });

                            return bikeMarker;
                        });
        
                    }catch (error) {
                        console.log(error);
                    }
                };
                var bikeLocations: any = getBikeLocations();  
    }

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if (ref.current) {
            setMap(
                new google.maps.Map(ref.current, {
                    zoom: zoomLevel,
                    center: address,
                    mapTypeControl: mapTypeControl,
                    streetViewControl: false,
                    rotateControl: false,
                    scaleControl: true,
                    fullscreenControl: false,
                    panControl: false,
                    zoomControl: true,
                    gestureHandling: 'cooperative',
                    mapTypeId: mapType,
                    draggableCursor: 'pointer',
                })
            );
        }
    };

    return (
        <div className="map-container">
            <div ref={ref} className="map-container__map"></div>
        </div>
    );
};

export default Map;