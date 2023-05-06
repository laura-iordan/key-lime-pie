import React, {useState, useEffect} from 'react';
import Topbar from '../global/Topbar';
import PermanentDrawerLeft from '../global/Siderbar.js';
import Employees from './Employees';
import UpdateEmployee from './UpdateEmployee';
import AddEmployee from './AddEmployee';
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    
    </div>
  );
}

export default Admin;
