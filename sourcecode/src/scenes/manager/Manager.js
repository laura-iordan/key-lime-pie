import React, {useState, useEffect} from 'react';
import Topbar from '../global/Topbar';
import PermanentDrawerLeft from '../global/Siderbar.js';
import { Routes, Route } from "react-router-dom";
import url from '../../get_php_link';
import ManagerProjects from './ManagerProjects';
import SideBarManager from './SideBarManager';
import ManagerTeam from './ManagerTeam';
import Reports from './Reports';


/*function Admin(){
    const [credential, setCredential] = useState({});
    const url = "http://localhost/key-lime-pie/php/login.php/";
    React.useEffect(() => {
        axios.get(url).then(response=>alert(response.data))
        .catch(error=>alert(error));
      }, []);
    return <h1>Admin</h1>
}*/



function Manager() {


  return (
    <div>
    <Topbar />
    <SideBarManager />
    
      <Routes>
        <Route path="/" element={<ManagerProjects />} />
        <Route path="/team" element={<ManagerTeam/>} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    
    </div>
  );
}

export default Manager;
