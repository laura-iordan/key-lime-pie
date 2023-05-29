import React, { useState} from 'react';
import axios from 'axios';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import url from '../get_php_link';
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function getPath(role){
      if(role === 0){
        return "/";
      } else if(role === 1){
        return "/admin";
      }
    }



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
        if(userData.username === username && userData.password === password){
          if(userData.id_role===1){
            navigate(`/admin`, {state: {id_user: userData.id_user}});
          } else if(userData.id_role===2){
            navigate(`/manager/dashboard`, {state: {id_user: userData.id_user}});
          } 
        } else{
          alert("Error");
        }
    })
        .catch(error => console.error(error));

    }
  }
    

    

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

}

export default Login;


