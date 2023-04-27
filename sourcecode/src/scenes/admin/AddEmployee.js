import React, {useState, useEffect} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from 'axios';
import url from '../../get_php_link';



function AddEmployee(){
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [ssn, setSsn] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [hourlyFee, setHourlyFee] = useState('');
    const [status, setStatus] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("1234");
    const [role, setRole] = useState('');

    const [roles, setRoles] = useState([]);

    /*useEffect(() => {
      fetch(url+'get_role.php')
        .then(response => response.json())
        .then(data => setRoles(data))
        .catch(error => console.error(error));
    }, []);*/
    
    const handleSubmit = () => {
          if(username.length === 0){
              alert("Username is blank!");
          } else if(email.length === 0){
              alert("Email is blank!");
          } else{

            /*axios.get(url)
            .then((response) => {
                alert(response.data);
            })
            .catch((err) => console.log(err));*/
              
  
              /*let fData = new FormData();
              fData.append('username', username);
              fData.append('password', password);
  
              axios.post(url, fData)
              .then(response=>alert(response.data))
              .catch(error=>alert(error));
  
              console.log("Hello");*/
  
                  
              /*getUser = () => {axios.get(url).then((res)=>{
                const allCredential = res.data;
                setCredential(allCredential);
              
              })}*/
              
  
                     
  
                  
              }
          }

    return (
    <div>
    <h1>{roles[0]}</h1>
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
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="surname"
            label="Surname"
            type="surname"
            id="surname"
            autoComplete="surname"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="ssn"
            label="SSN"
            name="ssn"
            autoComplete="ssn"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            type="address"
            id="address"
            autoComplete="address"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNo"
            label="PhoneNo"
            name="phoneNo"
            autoComplete="phoneNo"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="hourlyFee"
            label="Hourly Fee"
            type="hourlyFee"
            id="hourlyFee"
            autoComplete="hourlyFee"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
    </div>);
}

export default AddEmployee;