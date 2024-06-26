import users from "../data/users.json"

function loginUser(username: string , password: string){
    let check_user = users["users"].find((user)=> user.username === username)
    
    if(check_user?.password === password){
        console.log(check_user.username)
        return check_user.username
    }else{
        console.log(false)
        return false
    }
}

export {
    loginUser
}