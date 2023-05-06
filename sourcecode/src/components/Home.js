import React, {useState, useEffect} from 'react';
import Login from './Login';
import Admin from '../scenes/admin/Admin';
import Manager from '../scenes/manager/Manager';
import Projecthours from '../scenes/user/Projecthours';
import { Routes, Route } from "react-router-dom";
import Employees from '../scenes/admin/Employees';
import UpdateEmployee from '../scenes/admin/UpdateEmployee';
import AddEmployee from '../scenes/admin/AddEmployee';
import Projects from '../scenes/admin/Projects';
import Teams from '../scenes/admin/Teams';
import Team from '../scenes/manager/Team';



function Home() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
            <Route path="/admin" element={<Employees />} />
            <Route path="/admin/projects" element={<Projects />} />
            <Route path="/admin/teams" element={<Teams />} />
            <Route path="/admin/addEmployee" element={<AddEmployee />} />
            <Route path="/admin/updateEmployee/:id" element={<UpdateEmployee />} />
        </Route>
        <Route path="/manager" element={<Manager />}>       
            <Route path="/manager/team" element={<Team />} />
      </Route>
        <Route path="/user" element={<Projecthours />} />
      </Routes>
    
    </div>
  );
}

export default Home;
