import React, {useState, useEffect} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from 'axios';



function AddEmployee(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [credential, setCredential] = useState({});
    const url = "http://localhost/key-lime-pie/php/login.php";
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

    return (
    <div>
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
    </div>);
}

export default AddEmployee;