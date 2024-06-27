interface RideRequest {
    user: string;
    pickup: string;
    drop_off: string;
    days: number;
    recurring: boolean;
    arrival_time: string;
}

const rideRequest: RideRequest[] = [
    {
        "user":"x000000",
        "pickup":"600 Sloan Ave, Hamilton Township, NJ 08619",
        "drop_off":"213 Washington St #2917, Newark, NJ 07102",
        "days":31,
        "recurring":true,
        "arrival_time":"8:45am"
    }
];

export default rideRequest