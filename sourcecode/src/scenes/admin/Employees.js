import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Link } from "react-router-dom";
import url from '../../get_php_link';
function Employees() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(url+'get_users.php')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  console.log(users);

  return (
    <div>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr style={{backgroundColor: '#990099'}} >
            <th style={{border: '1px solid #ddd', padding: '8px', display: 'none'}}>ID</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Name</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Surname</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Email</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Team</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr onClick={() => navigate(`/admin/updateEmployee/${user.id_user}`)} key={user.id_user} style={{backgroundColor: 'white'}}>
              <td style={{border: '1px solid #ddd', padding: '8px', display: 'none'}}>{user.id_user}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.name}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.surname}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.email}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.team_name}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Box
  m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
      <Button variant="contained" component={Link} to="/admin/addEmployee">Add Employee</Button>
      </Box>
    </div>
  );
}

export default Employees;

