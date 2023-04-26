import React, {useState} from 'react';
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

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [credential, setCredential] = useState({});
    const url = "http://localhost/key-lime-pie/php/login.php";
    let getUser = () => {axios.get(url).then((res)=>res.data)}
    

    const handleSubmit = () => {
      console.log(username);
        if(username.length === 0){
            alert("Username is blank!");
        } else if(password.length === 0){
            alert("Password is blank!");
        } else{
            

            let fData = new FormData();
            fData.append('username', username);
            fData.append('password', password);

            axios.post(url, fData)
            .then(response=>alert(response.data))
            .catch(error=>alert(error));

            console.log("Hello");

                
            /*getUser = () => {axios.get(url).then((res)=>{
              const allCredential = res.data;
              setCredential(allCredential);
            
            })}*/
            

                   

                
            }
        }

        React.useEffect(() => {
          axios.get(url).then((response) => {
            setCredential(response.data);
          });
        }, []);

        console.log(credential);
    

    return (
    /*<Container component="main" maxWidth="xs">
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>);*/
    <div>
        <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant="contained" onClick={handleSubmit}>Login</Button>

    </div>);
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
