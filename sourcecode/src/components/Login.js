import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import url from '../get_php_link';
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userCredential, setUserCredential] = useState({
      id_user: 0,
      username: "",
      email: "",
      password: "",
      id_role: 0     
    });
    const [role, setRole] = useState(0);

    function getPath(role){
      if(role === 0){
        return "/";
      } else if(role === 1){
        return "/admin";
      }
    }

    /*useEffect(() => {
      axios.post(url+'login.php?username='+username)
      .then(function(response) {
        console.log(response.data);
        setUserCredential(response.data);
        console.log(userCredential.username);
    })
        .catch(error => console.error(error));
    })*/


    const handleSubmit = () => {
      if(username.length === 0){
        alert("Username is blank!");
    } else if(password.length === 0){
        alert("Password is blank!");
    } else{
      let fData = new FormData();
      fData.append('username', username)
      axios.post(url+'login.php', fData)
      .then(function(response) {
        const userData = response.data;
        console.log(userCredential.username);
        if(userData.username === username && userData.password === password){
          if(userData.id_role===1){
            navigate(`/admin`);
          } else if(userData.id_role===2){
            navigate(`/manager`);
          } else if(userData.id_role===3){
            navigate(`/user`);
          }
        } else{
          alert("Error");
        }
    })
        .catch(error => console.error(error));
        //console.log(credential);
      //setRole(credential[0].id_role);
      /*async function postData(url, data = {}) {
        // Default options are marked with *
        const response = await fetch(url);
        return response.json(); // parses JSON response into native JavaScript objects
      }
      postData(url+'login.php', { username: username }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});*/
    }
  }
    

    /*const handleSubmit = () => {
      console.log(username);
        if(username.length === 0){
            alert("Username is blank!");
        } else if(password.length === 0){
            alert("Password is blank!");
        } else{
            

            let fData = new FormData();
            fData.append('username', username);

            axios.post(url+'login.php', fData)
              .then(response=>alert(response.data))
              .then(data=>setCredential(data))
              .catch(error=>alert(error));                           
            }
            console.log(credential);
            if(credential[0].username === username && credential[0].password === password){
              alert("Success!");
            } else{
              alert("Error");
            }
        }*/

        /*React.useEffect(() => {
          axios.get(url).then((response) => {
            setCredential(response.data);
          });
        }, []);

        console.log(credential);*/
    

    return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            component={Link} to={getPath()}
            onClick={() => handleSubmit()}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>);
    /*<div>
        <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant="contained" onClick={handleSubmit}>Login</Button>

    </div>);*/
}

export default Login;

        /*<h1>{getUser}</h1>
         <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input type="button" name="submit" id="submit" value="SUBMIT" onClick={handleSubmit}/>*/
