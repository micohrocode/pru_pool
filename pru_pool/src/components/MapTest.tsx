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

    const [show,setShow] = useState(false);

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
            <button className="w-full py-2 px-4 bg-[#002b5a] text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={()=>{setShow(!show)}}>Show Info</button>
            <div style={{position:"absolute",top:"0",backgroundColor:"white"}}>
            {selected?.legs.map(function(data,index){
                return(
                    <>

                    {show ? <div style={{fontSize:"12px"}}>
                        <h2>{selected.summary}</h2>
                        <p>{data.start_address} to {data.end_address}</p>
                        <p>Distance: {data.distance?.text}</p>
                        <p>Duration: {data.duration?.text}</p>
                        <p>Contact Info: {props.contact_number}</p>
                        <p>Car Model: {props.car_model}</p>
                        <p>Car Capacity: {props.car_capacity}</p>
                    </div> : null}
                    </>
                    
                )
            })}
            </div>
        </div>
    )
}