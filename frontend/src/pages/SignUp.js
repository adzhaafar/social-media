import { React, useState } from 'react';
import axios from "axios";

function SignUp() {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // if account already exists, username is taken, email is invalid, one of the fields is not filled in.
    const [error, setError] = useState("");



    async function createAccount(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/createUser", {
                email: email, 
                fullname: fullName, 
                username: username, 
                password: password
            });
        } catch (error) {
            console.error(error);
        }
        
    
    }

    
    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updateFullName = (event) => {
        setFullName(event.target.value);
    }

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <form onSubmit={createAccount}>
            <input 
            autoComplete="off"
            placeholder="Email" 
            type="email" 
            value={email}
            name="email"    
            onChange={updateEmail}></input>
            
            <input
                autoComplete="off"
                placeholder="Full Name"
                type="text"
                value={fullName}
                name="fullName"
                onChange={updateFullName}></input>
            
            <input
                autoComplete="off"
                placeholder="Username"
                type="text"
                value={username}
                name="username"
                onChange={updateUsername}></input>
            
            <input
                autoComplete="off"
                placeholder="Password"
                type="password"
                value={password}
                name="username"
                onChange={updatePassword}></input>
            
            <button>Sign up</button>
        </form>

  )
}

export default SignUp;