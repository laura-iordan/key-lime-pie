import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from 'axios';
import url from '../../get_php_link';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Link } from "react-router-dom";


function InfoEmployee(){
  
  const navigate = useNavigate();
  const { id } = useParams();
    const [user, setUser] = useState({
      username: "",
      email: "",
      id_role: 0,
      name: "",
      surname: "",
      SSN: 0,
      address: "",
      phone_no: "",
      hourly_fee: 0,
      status: 0,
    });
    
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [ssn, setSsn] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [hourlyFee, setHourlyFee] = useState('');
    const [status, setStatus] = useState(1);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState(3);
    const [roles, setRoles] = useState([]);
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
      axios.post(url+'get_employee.php?id_user='+id)
      .then(function(response) {
        setUser(response.data[0]);
        console.log(user.id_role);
    })
        .catch(error => console.error(error));
    }, []);


    useEffect(() => {
      fetch(url+'get_role.php')
        .then(response => response.json())
        .then(data => setRoles(data))
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
      fetch(url+'get_status.php')
        .then(response => response.json())
        .then(data => setStatuses(data))
        .catch(error => console.error(error));
    }, []);
    
    const handleSubmit = () => {
          if(username.length === 0){
              alert("Username is blank!");
          } else if(email.length === 0){
              alert("Email is blank!");
          } else{

              
  
              let fData = new FormData();
              fData.append('username', username);
              fData.append('email', email);
              fData.append('password', '1234');
              fData.append('id_role', role);
              fData.append('name', name);
              fData.append('surname', surname);
              fData.append('SSN', ssn);
              fData.append('address', address);
              fData.append('email', email);
              fData.append('phoneNo', phoneNo);
              fData.append('hourlyFee', hourlyFee);
              fData.append('status', status);
  
              axios.post(url+'update_employee.php', fData)
              .then(response=>alert(response.data))
              .catch(error=>alert(error));                  
              }
          }
    const handleChangeRole=(e)=>{
      setRole(e.target.value);
    }

    const handleChangeStatus=(e)=>{
      setStatus(e.target.value);
    }

    return (
    <div> 
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={user.username} 
            onChange={(e)=>setUsername(e.target.value)}
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
            value={user.email} 
            onChange={(e)=>setEmail(e.target.value)}
          />
          <InputLabel id="role-label">Role</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
              }}

              value={user.id_role}
              labelId="role-label"
              id="role-select"
              label="Role"
              onChange={handleChangeRole}
              >
              {roles.map(role => (
                <MenuItem value={role.id_role}>{role.role}</MenuItem>
              ))}

            </Select>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={user.name} 
            onChange={(e)=>setName(e.target.value)}
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
            value={user.surname} 
            onChange={(e)=>setSurname(e.target.value)}
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
            value={user.SSN} 
            onChange={(e)=>setSsn(e.target.value)}
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
            value={user.address} 
            onChange={(e)=>setAddress(e.target.value)}
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
            value={user.phone_no} 
            onChange={(e)=>setPhoneNo(e.target.value)}
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
            value={user.hourly_fee} 
            onChange={(e)=>setHourlyFee(e.target.value)}
          />
          <InputLabel id="status-label">Status</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
              }}

              value={user.status}
              labelId="status-label"
              id="status-select"
              label="Status"
              onChange={handleChangeStatus}
              >
              {statuses.map(status => (
                <MenuItem value={status.id_status}>{status.id_status}</MenuItem>
              ))}

            </Select>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            component={Link} to="/"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Box>
    </div>);
}

export default InfoEmployee;