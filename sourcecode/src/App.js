import React, { useState } from 'react';
import Login from "./components/Login";
import Admin from "./scenes/admin/Admin";
//import Home from "./components/Home"
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";
import { mainTheme } from "./theme"
import Topbar from './scenes/global/Topbar';
import SidebarManager from './scenes/global/SidebarManager';
import SidebarAdmin from './scenes/global/SidebarAdmin';
import Manager from './scenes/manager/Manager';
import Projecthours from './scenes/user/Projecthours';
import { Routes, Route, Router } from "react-router-dom";
import Employees from './scenes/admin/Employees';
import UpdateEmployee from './scenes/admin/UpdateEmployee';
import AddEmployee from './scenes/admin/AddEmployee';
import Projects from './scenes/admin/Projects';
import Teams from './scenes/admin/Teams';
import Piead from './scenes/admin/Piead';
import Team from './scenes/manager/Team';
import Chart from './scenes/manager/Chart';
import ChartAdmin from './scenes/admin/ChartAdmin';
import Pie from './scenes/manager/Pie';
import Line from './scenes/manager/Line';
import Bump from './scenes/manager/Bump';
import Dashboard from './scenes/manager/Dashboard';
import BChart from './scenes/manager/Bar2';
import AddTeam from './scenes/admin/AddTeam';
import Employees2 from './scenes/admin/Employees2';


var isLoggedIn = false;

function renderConditionally(){
    if(isLoggedIn){
        return <Admin />
    } else{
        return <Login />
    }
}

function App() {
    const [isSidebar, setIsSidebar] = useState(true);
    return (
            <ThemeProvider theme = { mainTheme } >
                <CssBaseline/>
                <div className="app">
                    
                    <Routes>
                <Route path="/admin" element={<SidebarAdmin isSidebar={isSidebar} />}>
                    <Route path="/admin/projects" element={<SidebarAdmin isSidebar={isSidebar} />} />
                    <Route path="/admin/teams" element={<SidebarAdmin isSidebar={isSidebar} />} />
                    <Route path="/admin/addEmployee" element={<SidebarAdmin isSidebar={isSidebar} />} />
                    <Route path="/admin/updateEmployee/:id" element={<SidebarAdmin isSidebar={isSidebar} />} />
                    <Route path="/admin/barChartAdmin" element={<SidebarAdmin isSidebar={isSidebar} />} />
                    <Route path="/admin/pieChartAdmin" element={<SidebarAdmin isSidebar={isSidebar} />} />
                </Route>
                <Route path="/manager" element={<SidebarManager isSidebar={isSidebar} />}>
                    <Route path="/manager/dashboard" element={<SidebarManager isSidebar={isSidebar} />}/>       
                    <Route path="/manager/team" element={<SidebarManager isSidebar={isSidebar} />} />
                    <Route path="/manager/barChart" element={<SidebarManager isSidebar={isSidebar} />} />
                    <Route path="/manager/pieChart" element={<SidebarManager isSidebar={isSidebar} />} />
                    <Route path="/manager/lineChart" element={<SidebarManager isSidebar={isSidebar} />} />
                    <Route path="/manager/bumpChart" element={<SidebarManager isSidebar={isSidebar} />} />
                    <Route path="/manager/barChart2" element={<SidebarManager isSidebar={isSidebar} />} />
                </Route>
                <Route path="/user" element={<SidebarManager isSidebar={isSidebar} />}/>
                </Routes>
               
                
                
                    <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                    
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/admin" element={<Admin />}>
                            <Route path="/admin" element={<Employees />} />+
                            <Route path="/admin/employees" element={<Employees2 />} />
                            <Route path="/admin/projects" element={<Projects />} />
                            <Route path="/admin/teams" element={<Teams />} />
                            <Route path="/admin/addTeam" element={<AddTeam />} />
                            <Route path="/admin/addEmployee" element={<AddEmployee />} />
                            <Route path="/admin/updateEmployee/:id" element={<UpdateEmployee />} />
                            <Route path="/admin/barChartAdmin" element={<ChartAdmin />} />
                            <Route path="/admin/pieChartAdmin" element={<Piead />} />
                        </Route>
                        <Route path="/manager" element={<Manager />}>
                            <Route path="/manager/dashboard" element={<Dashboard />}/>       
                            <Route path="/manager/team" element={<Team />} />
                            <Route path="/manager/barChart" element={<Chart />} />
                            <Route path="/manager/pieChart" element={<Pie />} />
                            <Route path="/manager/lineChart" element={<Line />} />
                            <Route path="/manager/bumpChart" element={<Bump />} />
                            <Route path="/manager/barChart2" element={<BChart />} />
                    </Route>
                        <Route path="/user" element={<Projecthours />} />
                    </Routes>
               
                    
                    </main>
                </div>
            </ThemeProvider>
        
    )        
}

export default App;
