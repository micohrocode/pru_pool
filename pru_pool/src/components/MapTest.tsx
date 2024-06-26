"use client"

import {useEffect, useState} from 'react';
import {
    APIProvider,
    Map,
    useMapsLibrary,
    useMap,
} from "@vis.gl/react-google-maps";

export default function MapTest(){
    let position = {lat: 40.73804874224541, lng: -74.17431798728744}

    return <div style={{height:"100vh",width:"100%"}}>
        <APIProvider apiKey='AIzaSyDEzb-XFMO4Vh0obCfpV76PIiHiqk7i39Y'>
            <Map 
            center={position} 
            zoom={9}
            fullscreenControl={false}
            >
                <Directions/>
            </Map>
        </APIProvider>
    </div>
}

function Directions(){
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
    const [routes,setRoutes] = useState<google.maps.DirectionsRoute[]>()
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes ? routes[routeIndex] : null;
    const leg = selected?.legs[0];


    useEffect(()=>{
        if(!routesLibrary || !map) return;
        setDirectionsService(new routesLibrary.DirectionsService())
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({map}))
    },[routesLibrary,map]);

    useEffect(()=>{
        if(!directionsRenderer || !directionsRenderer) return;
        directionsService?.route({
            origin: "600 Sloan Ave, Hamilton Township, NJ 08619",
            destination: "213 Washington St #2917, Newark, NJ 07102",
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
        }).then(response =>{
            directionsRenderer.setDirections(response);
            setRoutes(response.routes);
        })
    },[directionsService,directionsRenderer])

    if (!leg) return null;

    return (
        <div className='directions'>
            <h2>{selected.summary}</h2>
            <p>{leg.start_address} to {leg.end_address}</p>
            <p>Distance: {leg.distance?.text}</p>
            <p>Duration: {leg.duration?.text}</p>
        </div>
    )
}