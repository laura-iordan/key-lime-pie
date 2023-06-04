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
import { mainTheme } from '../theme';
import background from '../resources/background.jpg';

function Login(props){
    const navigate = useNavigate();
    
    const {userCredential, setUserCredential} = props;
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
        setUserCredential(userData);
        if(userData.username === username && userData.password === password){
          
          if(userData.id_role===1){
            navigate(`/admin/${userData.id_user}`);
          } else if(userData.id_role===2){
            navigate(`/manager/dashboard/${userData.id_user}`);
          } 
        } else{
          alert("Error");
        }
    })
        .catch(error => console.error(error));

    }
  }
    
    return (
      <div style = {{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        paddingTop: "8px",
        height: "90%"
      }}>
          <Container component="main" maxWidth="xs">
      <Box className="rounded-corners" style = {{
          padding: '50px',
          backgroundColor: mainTheme.green[100]
          }}
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        
        }}
      >
        <Typography variant="h3" fontStyle={{fontWeight: "bold"}}>
          {"Sign In"}
          </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,
          '.MuiTextField-root': {
            background: '#ffffff'
          }  }}>
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
            <Typography variant="h5">
          {"Sign In"}
          </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
      </div>
    );

}

export default Login;


