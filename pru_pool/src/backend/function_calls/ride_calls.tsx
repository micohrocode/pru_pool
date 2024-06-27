import rides from "../data/rides.json"
import rideRequest from '../data/requests'
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
        let user_pref = rideRequest.find((requests)=> requests.user === xid)
        if (user_pref === undefined) {
            console.log("user ", xid, " does not have request information set up.")
            return []
        }else{
            let days = user_pref.days
            let dropoff = user_pref.drop_off
            let filtered_rides = rides["rides"].filter((user)=> (user.days & days) > 0 && user.passengers.length < user.car_capacity && dropoff === user.drop_off)
            if (filtered_rides.length === 0){
                return []
            }
            return filtered_rides;
        }
    }
    catch (e){
        console.log((e as Error).message);
    }
}

function  switchToBinary(days : String[]) {
    let bin_days = 0
    
    if (days.includes("Monday")) {
        bin_days += 16
    }
    if (days.includes("Tuesday")) {
        bin_days += 8
    }
    if (days.includes("Wednesday")) {
        bin_days += 4
    }
    if (days.includes("Thursday")) {
        bin_days += 2
    }
    if (days.includes("Friday")) {
        bin_days += 1
    }
    console.log("endianness: ", (bin_days >>> 0).toString(2), " actual number: ", bin_days)
    return bin_days
    
}

function switchToDay(bin_days: number): string[] {
    let days: string[] = [];

    if (bin_days & 16) {
        days.push(" Monday");
    }
    if (bin_days & 8) {
        days.push(" Tuesday");
    }
    if (bin_days & 4) {
        days.push(" Wednesday");
    }
    if (bin_days & 2) {
        days.push(" Thursday");
    }
    if (bin_days & 1) {
        days.push(" Friday");
    }

    return days;
}


function uploadNewRequest(request_ride: any){
    // changes list of days to binary int and uploads a request object to requests.json

    rideRequest.push({"user": request_ride["user"],
                    "pickup": request_ride["pickup"],
                    "drop_off": request_ride["drop_off"],
                    "days": switchToBinary(request_ride["days"]),
                    "recurring": request_ride["recurring"],
                    "arrival_time": request_ride["arrival_time"]
                    })
    console.log(rideRequest)

}

export {
    viewAllRides,
    viewFilteredRides,
    uploadNewRequest,
    switchToBinary,
    switchToDay
}






