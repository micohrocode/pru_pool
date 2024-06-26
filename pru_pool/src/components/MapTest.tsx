"use client"

import {useEffect, useState, FunctionComponent, PropsWithChildren} from 'react';
import {
    APIProvider,
    Map,
    useMapsLibrary,
    useMap,
} from "@vis.gl/react-google-maps";

interface MapProps {
    props: {
            "user": string,
            "start_point": string, 
            "drop_off": string,
            "days":number,
            "recurring":boolean,
            "car_capacity": number,
            "start_time":string,
            "arrival_time":string,
            "car_model":string,
            "contact_number":string,
            "current_stops":string[],
            "passengers":string[]
    }
}


export const MapTest: FunctionComponent<PropsWithChildren<MapProps>> = ({props}) =>{
    let position = {lat: 40.73804874224541, lng: -74.17431798728744}

    return <div style={{height:"100vh",width:"100%"}} className='flex flex-row'>
        <APIProvider apiKey='AIzaSyDEzb-XFMO4Vh0obCfpV76PIiHiqk7i39Y'>
            <Map 
            center={position} 
            zoom={9}
            fullscreenControl={false}
            >
                <Directions props={props}/>
            </Map>
        </APIProvider>
    </div>
}

const Directions: FunctionComponent<PropsWithChildren<MapProps>> = ({props}) =>{
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
    const [routes,setRoutes] = useState<google.maps.DirectionsRoute[]>()
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes ? routes[routeIndex] : null;
    const leg = selected?.legs[0];

    console.log(props)

    useEffect(()=>{
        if(!routesLibrary || !map) return;
        setDirectionsService(new routesLibrary.DirectionsService())
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({map}))
    },[routesLibrary,map]);

    useEffect(()=>{
        if(!directionsRenderer || !directionsRenderer) return;
        directionsService?.route({
            origin: props["start_point"],
            destination: props["drop_off"],
            waypoints: props["current_stops"].slice(1,-1).map(x => ({location:x})),
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
        }).then(response =>{
            directionsRenderer.setDirections(response);
            setRoutes(response.routes);
        })
    },[directionsService,directionsRenderer])

    if (!leg) return null;

    return (
        <div className='directions' style={{color:"black"}}>
            <h2>{selected.summary}</h2>
            {selected?.legs.map(function(data,index){
                return(
                    <div>
                        <p>{data.start_address} to {data.end_address}</p>
                        <p>Distance: {data.distance?.text}</p>
                        <p>Duration: {data.duration?.text}</p>
                    </div>
                )
            })}
        </div>
    )
}