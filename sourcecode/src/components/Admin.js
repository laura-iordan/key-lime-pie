import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import PermanentDrawerLeft from './Sidebar';
import Employees from './admin/Employees';


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
    <Employees />
      
    </div>
  );
}

export default Admin;
