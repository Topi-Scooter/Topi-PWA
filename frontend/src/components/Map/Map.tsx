// Docs: https://storksnestblog.wordpress.com/2020/08/16/setting-up-google-maps-with-react-typescript/
import React, {useEffect, useRef, useState} from 'react';
import { markAsUntransferable } from 'worker_threads';
import './Map.scss';

interface IMapProps {
    mapId: string;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;
const cmuPosition = { lat: 39.081098, lng: -108.554785 }; // TODO move to better place
const zoom = 16; // TODO move to better place
const bikeIcon: any = {url: 'https://img.icons8.com/ios-glyphs/30/000000/person-male.png'}
                    // scaledSize: new window.google.maps.Size(25, 25)}

async function getUserPosition(){
    navigator.geolocation.getCurrentPosition(function(userPosition) {
        // console.log(userPosition);
        userLocation = userPosition;
    });
}

var userLocation: any = getUserPosition();

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
        // console.log(ddb_results.Items);
        bikeLocations = ddb_results.Items;
    }catch (error) {
        console.log(error);
    }
};

var bikeLocations: any = getBikeLocations();

const Map: React.FC<IMapProps> = ({ mapId }) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<GoogleMap>();

    var initMap = (zoomLevel: number, address: GoogleLatLng): void => {
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
            new google.maps.Marker({
                position: new google.maps.LatLng(Number(userLocation.lat), Number(userLocation.lng)),
                map: map,
                icon: bikeIcon,
                // zIndex: zIndex ,
            });

            var newArr = bikeLocations.map(function(bike: any, index: any){
         
              // printing element
              console.log("key : ",index, "value : ",bike);

            // testing
            //   new google.maps.Marker({
            //     position: new google.maps.LatLng(Number(bike.lat), Number(bike.lng)),
            //     map: map,
            //     icon: bikeIcon
            // });
            })

            // from original file
            //  {
            //   // add bikes from dynamodb table
            //   this.state.bikelocations.Items.map((bike, index) => {
            //     // console.log("in ui", bike)
            //     return (
            //       <Marker title={bike.bikeid} 
            //         key={index}
            //         position ={{
            //           lat: bike.lat,
            //           lng: bike.lng        
            //         }}
            //         icon={{url: 'https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/50/000000/external-bike-vacation-vitaliy-gorbachev-fill-vitaly-gorbachev.png',
            //               scaledSize: new window.google.maps.Size(25, 25)}}
            //         >
            //   </Marker>
            //     )
            //   })
            // }
        }
    };
    const defaultMapStart = (): void => {
        console.log("test start");
        console.log(userLocation);
        console.log(bikeLocations);
        console.log("test end");
        const defaultAddress = new google.maps.LatLng(cmuPosition);
        initMap(zoom, defaultAddress);
    };

    useEffect((): void => {
        if (!map) {
            defaultMapStart()
        }
    }, [map]);

    return (
        <div className="map-container">
            <div ref={ref} className="map-container__map"></div>
        </div>
    );
};

export default Map;