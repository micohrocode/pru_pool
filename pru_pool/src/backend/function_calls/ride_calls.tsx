import rides from "../data/rides.json"

function viewAllRides(){
    // show all available rides
    //No null check, assume json file will always be populated
    let all_rides = rides["rides"].filter((user)=> user.passengers.length < user.car_capacity)
    return all_rides;
}

function viewFilteredRides(filters : object){
    // show all rides that meet the filters
}

export {
    viewAllRides,
    viewFilteredRides
}






