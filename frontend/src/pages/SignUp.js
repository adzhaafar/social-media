import { React, useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    
    

    // function createAccount(e) {
    //     const requestOptions = {

    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             firstName: firstName,

    //         })
    //     }
    //     fetch("/createUser", requestOptions)
    //         .then(res => { return res.json() })
    //         .then((data) => console.log(data))
    //         .catch(err => console.error(err));
    // }

    const createAccount = () => {
        console.log(submitted)
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
            placeholder="Email" 
            type="email" 
            value={email}
            name="email"    
            onChange={updateEmail}></input>
            
            <input
                placeholder="Full Name"
                type="text"
                value={fullName}
                name="fullName"
                onChange={updateFullName}></input>
            
            <input
                placeholder="Username"
                type="text"
                value={username}
                name="username"
                onChange={updateUsername}></input>
            
            <input
                placeholder="Password"
                type="password"
                value={password}
                name="username"
                onChange={password}></input>
            
            <button>Sign up</button>
        </form>

  )
}

export default SignUp