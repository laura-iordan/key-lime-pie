import React, { useState } from 'react';
import Login from "./components/Login";
import Admin from "./scenes/admin/Admin";
//import Home from "./components/Home"
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";
import { mainTheme } from "./theme"
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Manager from './scenes/manager/Manager';
import Projecthours from './scenes/user/Projecthours';
import { Routes, Route } from "react-router-dom";
import Employees from './scenes/admin/Employees';
import UpdateEmployee from './scenes/admin/UpdateEmployee';
import AddEmployee from './scenes/admin/AddEmployee';
import Projects from './scenes/admin/Projects';
import Teams from './scenes/admin/Teams';
import Team from './scenes/manager/Team';
import Chart from './scenes/manager/Chart';
import Pie from './scenes/manager/Pie';
import Line from './scenes/manager/Line';
import Dashboard from './scenes/manager/Dashboard';

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
                <Route path="/admin" element={<Sidebar isSidebar={isSidebar} />}>
                    <Route path="/admin/projects" element={<Sidebar isSidebar={isSidebar} />} />
                    <Route path="/admin/teams" element={<Sidebar isSidebar={isSidebar} />} />
                    <Route path="/admin/addEmployee" element={<Sidebar isSidebar={isSidebar} />} />
                    <Route path="/admin/updateEmployee/:id" element={<Sidebar isSidebar={isSidebar} />} />
                </Route>
                <Route path="/manager" element={<Sidebar isSidebar={isSidebar} />}>
                    <Route path="/manager/dashboard" element={<Sidebar isSidebar={isSidebar} />}/>       
                    <Route path="/manager/team" element={<Sidebar isSidebar={isSidebar} />} />
                    <Route path="/manager/barChart" element={<Sidebar isSidebar={isSidebar} />} />
                    <Route path="/manager/pieChart" element={<Sidebar isSidebar={isSidebar} />} />
                    <Route path="/manager/lineChart" element={<Sidebar isSidebar={isSidebar} />} />
                </Route>
                <Route path="/user" element={<Sidebar isSidebar={isSidebar} />}/>
                </Routes>
                
                    <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
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
                            <Route path="/manager/dashboard" element={<Dashboard />}/>       
                            <Route path="/manager/team" element={<Team />} />
                            <Route path="/manager/barChart" element={<Chart />} />
                            <Route path="/manager/pieChart" element={<Pie />} />
                            <Route path="/manager/lineChart" element={<Line />} />
                    </Route>
                        <Route path="/user" element={<Projecthours />} />
                    </Routes>
                    </main>
                </div>
            </ThemeProvider>
        
    )        
}

export default App;
