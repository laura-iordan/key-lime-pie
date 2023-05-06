import React, {useState, useEffect} from 'react';
import Topbar from '../global/Topbar';
import PermanentDrawerLeft from '../global/Siderbar.js';
import { Routes, Route, Outlet } from "react-router-dom";
import url from '../../get_php_link';
import ManagerProjects from './ManagerProjects';
import SideBarManager from './SideBarManager';
import ManagerTeam from './ManagerTeam';
import Reports from './Reports';


function Manager() {


  return (
    <div>
    <Topbar />
    <Outlet />
    
      
    
    </div>
  );
}

export default Manager;
