import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import PermanentDrawerLeft from './Sidebar';
import axios from 'axios';


/*function Admin(){
    const [credential, setCredential] = useState({});
    const url = "http://localhost/key-lime-pie/php/login.php/";
    React.useEffect(() => {
        axios.get(url).then(response=>alert(response.data))
        .catch(error=>alert(error));
      }, []);
    return <h1>Admin</h1>
}*/


function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost/key-lime-pie/php/get_users.php')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
    <Navbar />
    <PermanentDrawerLeft />
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr style={{backgroundColor: '#990099'}}>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>ID</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Name</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Email</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Password</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id_users} style={{backgroundColor: 'white'}}>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.id_user}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.username}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.email}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.password}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{user.id_role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
