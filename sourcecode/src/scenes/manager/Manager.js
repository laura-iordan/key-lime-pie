import React, {useState, useEffect} from 'react';
import Topbar from '../global/Topbar';
import { Routes, Route, Outlet } from "react-router-dom";
import url from '../../get_php_link';
import ManagerProjects from './ManagerProjects';
import SideBarManager from './SideBarManager';
import SidebarManager from '../global/SidebarManager';
import ManagerTeam from './ManagerTeam';
import Reports from './Reports';


function Manager() {


  return (
    <div>
    <Outlet />
    
    </div>
  );
}

export default Manager;
