import React, {useState, useEffect} from 'react';
import Topbar from '../global/Topbar';
import Employees from './Employees';
import UpdateEmployee from './UpdateEmployee';
import AddEmployee from './AddEmployee';
import { Routes, Route, Outlet } from "react-router-dom";
import Projects from './Projects';
import Teams from './Teams';
import url from '../../get_php_link';
import Sidebar from '../global/Siderbar.js';


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


  return (
    <div>
    <Topbar />
    <Sidebar/>
    <Outlet />
    
    </div>
  );
}

export default Admin;
