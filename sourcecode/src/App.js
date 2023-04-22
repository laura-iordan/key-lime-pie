import React, {useState} from 'react';
import axios from 'axios';

function App(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if(username.length === 0){
            alert("Username is blank!");
        } else if(email.length === 0){
            alert("Email is blank!");
        } else if(password.length === 0){
            alert("Password is blank!");
        } else{
            const url = "http://localhost/key-lime-pie/php/login.php";

            let fData = new FormData();
            fData.append('username', username);
            fData.append('email', email);
            fData.append('password', password);

            axios.post(url, fData)
            .then(response=>alert(response.data))
            .catch(error=>alert(error));
        }
    }

    return <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input type="button" name="submit" id="submit" value="SUBMIT" onClick={handleSubmit}/>
    </div>;
}

export default App;
