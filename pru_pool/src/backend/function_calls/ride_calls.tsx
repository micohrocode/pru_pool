import rides from "../data/rides.json"
import requests from "../data/requests.json"
import users from "../data/users.json"

function viewAllRides(){
    // show all available rides
    // Returns iterable of all ride's information
    //No null check, assume json file will always be populated
    let all_rides = rides["rides"].filter((user)=> user.passengers.length < user.car_capacity)
    return all_rides;
}

function viewFilteredRides(xid: string){
    // show all rides that meet the filters
    // returns iterable of all filtered ride's information
    // returns false if user's request.json preferences arent set up.
    try{
        let user_pref = requests["requests"].find((requests)=> requests.user === xid)
        if (user_pref === undefined) {
            console.log("user ", xid, " does not have request information set up.")
            return false
        }else{
            let days = user_pref.days
            let dropoff = user_pref.drop_off
            let filtered_rides = rides["rides"].filter((user)=> (user.days & days) > 0 && user.passengers.length < user.car_capacity && dropoff === user.drop_off)
            if (filtered_rides.length === 0){
                return false
            }
            return filtered_rides;
        }
    }
    catch (e){
        console.log((e as Error).message);
    }
}

export {
    viewAllRides,
    viewFilteredRides
}






