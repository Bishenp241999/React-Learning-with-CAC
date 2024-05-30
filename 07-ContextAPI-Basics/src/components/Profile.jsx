import { useContext } from "react"
import UserContext from "../UI/UserContext"

export default function Profile(){
    const {user} = useContext(UserContext);
    if(!user) return <h1>Not Logged in..</h1>
    return(
        <div>
           <h1>Profile : {user.username}</h1>
        </div>
    )
}