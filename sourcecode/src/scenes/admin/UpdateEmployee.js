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


function UpdateEmployee(){
  
  const navigate = useNavigate();
  const { id } = useParams();
    const [user, setUser] = useState({
      username: "",
      email: "",
      id_role: 3,
      name: "",
      surname: "",
      SSN: 0,
      address: "",
      phone_no: "",
      hourly_fee: 0,
      status: 1,
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
        console.log(response.data);
        setUser(response.data);
    })
        .catch(error => console.error(error));
    }, []);


    /*useEffect(() => {
      if (!id) return;
      axios.get(url+'get_employee.php',{
          params: {
            id_user: id,
          }
        })
        .catch(function (error) {
          console.log(error);
       })
       .then(function (response) {
        console.log(response.data);
      });
    }, []);*/
    
    /*const getData = () => {

      //setLoading(true);
      
      const params = new FormData();
      params.append("id_user", id);

      axios.post(url+"get_employee.php", params).then((response)=>{
        setUser({});
        setUser(response.data);
      });
    }
    useEffect(getData, [id]);*/

    


   /*useEffect(() => {
      //if (!id) return;
      let fetchPost = () => {
        const response1 = axios.get(url+'get_employee.php?id_user='+id).then(response => {return response.data}).catch(error=>console.error(error));
        return response1;
        //console.log(user);
      };
      const a = fetchPost();
      console.log(a);

      a.then( result => {setUser(result);
      console.log(user)});
    }, []);*/

    /*useEffect(() => {
   const userUpdated = () => {
      const data1 = axios.get(url+'get_employee.php',{
        params: {
          id_user: id,
        }
      }).then(response => {return response.data}).catch(error=>console.error(error))
      return data1;
  }

  const data = userUpdated();
  console.log(data);
  
  data.then(result => {
    setUser(result);
    console.log(user); // "Some User token"
 })
});*/

  /*useEffect(() => {
    let newURL = url+'get_employee.php?id_user='+id;

    fetch(newURL)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, []);*/


  

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
              fData.append('id_user', id)
              fData.append('username', user.username);
              fData.append('email', user.email);
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
    const handleChangeRole=(e)=>{
      const userClone = { ...user };
      userClone[e.target.name] = e.target.value;
      setUser(userClone);
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            component={Link} to="/"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleSubmit()}
          >
            Update
          </Button>
        </Box>
    </div>);
}

export default UpdateEmployee;