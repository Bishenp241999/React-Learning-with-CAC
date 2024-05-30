import { useState,useContext} from "react";
import UserContext from "../UI/UserContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);


    function handleSubmit(e) {
        e.preventDefault();
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login Form</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            {"     "}
            <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
            />
            {"     "}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}