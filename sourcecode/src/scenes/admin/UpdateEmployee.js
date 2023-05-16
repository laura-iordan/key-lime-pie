import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from 'axios';
import url from '../../get_php_link';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Link } from "react-router-dom";
import { mainTheme } from '../../theme';
import { Typography } from '@mui/material';

function UpdateEmployee(){

  const { id } = useParams();
    const [user, setUser] = useState({
      id_role: 3,
      name: "",
      surname: "",
      SSN: 0,
      address: "",
      phone_no: "",
      hourly_fee: 0,
      status: 1,
    });
    

    const [roles, setRoles] = useState([]);
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
      axios.post(url+'get_employee.php?id_user='+id)
      .then(function(response) {
        console.log(response.data);
        setUser(response.data);
    })
        .catch(error => console.error(error));
    }, [id]);

 

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

    const handleChange = (e) => {
      const userClone = { ...user };
      userClone[e.target.name] = e.target.value;
      setUser(userClone);
    };
    
    const handleSubmit = () => {          
              let fData = new FormData();
              fData.append('id_user', id);
              fData.append('id_role', user.role);
              fData.append('name', user.name);
              fData.append('surname', user.surname);
              fData.append('SSN', user.SSN);
              fData.append('address', user.address);
              fData.append('email', user.email);
              fData.append('phoneNo', user.phone_no);
              fData.append('hourlyFee', user.hourly_fee);
              fData.append('status', user.status);
  
              axios.post(url+'update_employee.php', fData)
              .then(response=>alert(response.data))
              .catch(error=>alert(error));                  
              
          }


    return (
    <div style = {{
        paddingLeft: '450px',
        paddingRight: '450px'
        
      }}> 
      <Typography variant='h1'>
          <p style={{
            textAlign: 'center'
          }}>
          Update Employee
          </p>
        </Typography>
        <Box className="rounded-corners" style = {{
          padding: '50px',
          backgroundColor: mainTheme.green[100]
          }}> 
        <Box component="form" noValidate sx={{ mt: 1,
          '.MuiTextField-root': {
            background: '#ffffff'
          } }}>
          
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <InputLabel id="role-label">Role</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
                background: '#ffffff'
              }}

              value={user.id_role}
              labelId="role-label"
              id="role-select"
              label="Role"
              name="id_role"
              onChange={handleChange}
              >
              {roles.map(role => (
                <MenuItem key={role.id_role} name="id_role" value={role.id_role}>{role.role}</MenuItem>
              ))}

            </Select>
          <TextField
            margin="normal"
            required
            fullWidth
            id="ssn"
            label="SSN"
            name="SSN"
            autoComplete="ssn"
            autoFocus
            value={user.SSN} 
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNo"
            label="PhoneNo"
            name="phone_no"
            autoComplete="phoneNo"
            autoFocus
            value={user.phone_no} 
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="hourly_fee"
            label="Hourly Fee"
            type="hourlyFee"
            id="hourlyFee"
            autoComplete="hourlyFee"
            value={user.hourly_fee} 
            onChange={handleChange}
          />
          <InputLabel id="status-label">Status</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
                background: '#ffffff'
              }}

              value={user.status}
              labelId="status-label"
              id="status-select"
              label="Status"
              name="status"
              onChange={handleChange}
              >
              {statuses.map(status => (
                <MenuItem key={status.id_status} value={status.id_status}>{status.id_status}</MenuItem>
              ))}

            </Select>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            component={Link} to="/admin"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleSubmit()}
          >
            <Typography>
                Update
            </Typography>
          </Button>
          </Box>
        </Box>
    </div>);
}

export default UpdateEmployee;