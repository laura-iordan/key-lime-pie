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
import { Routes, Route, useLocation} from "react-router-dom";
import Employees from './scenes/admin/Employees';
import UpdateEmployee from './scenes/admin/UpdateEmployee';
import AddEmployee from './scenes/admin/AddEmployee';
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
import UpdateTeam from './scenes/admin/UpdateTeam';
import Task from './scenes/manager/Task';
import AddTask from './scenes/manager/AddTask';
import UpdateTask from './scenes/manager/UpdateTask';
import CardinalAreaChart from './components/CardinalAreaChart';
import UpdateProjects from './scenes/admin/UpdateProjects';
import AddProject from './scenes/admin/AddProject';


function App() {
    let userId=0;
    const location = useLocation();
    if(location.state){
        userId = location.state.id_user;
    }
    
    const [isSidebar, setIsSidebar] = useState(true);
    return (
            <ThemeProvider theme = { mainTheme } >
                <CssBaseline/>
                <div className="app">
                    
                    <Routes>
                <Route path="/admin" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>}>
                    <Route path="/admin/projects" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/admin/addProject" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/admin/teams" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/admin/addEmployee" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/admin/updateEmployee/:id" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/admin/updateTeam/:id" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/admin/barChartAdmin" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/admin/pieChartAdmin" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                </Route>
                <Route path="/manager" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>}>
                    <Route path="/manager/dashboard" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>}/>       
                    <Route path="/manager/team" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/task" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/addTask" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/updateTask/:id" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/barChart" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/pieChart" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/lineChart" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/bumpChart" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/barChart2" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/cardinalAreaChart" element={<CardinalAreaChart isSidebar={isSidebar} />}/>
                </Route>
                <Route path="/user" element={<SidebarManager isSidebar={isSidebar} />}/>
                </Routes>
               
                
                
                    <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                    
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/admin" element={<Admin userId={userId}/>}>
                            <Route path="/admin" element={<Employees userId={userId}/>} />
                            <Route path="/admin/projects" element={<UpdateProjects userId={userId}/>} />
                            <Route path="/admin/addProject" element={<AddProject userId={userId}/>} />
                            <Route path="/admin/teams" element={<Teams userId={userId}/>} />
                            <Route path="/admin/addTeam" element={<AddTeam userId={userId}/>} />
                            <Route path="/admin/updateTeam/:id" element={<UpdateTeam userId={userId}/>} />
                            <Route path="/admin/addEmployee" element={<AddEmployee userId={userId}/>} />
                            <Route path="/admin/updateEmployee/:id" element={<UpdateEmployee userId={userId}/>} />
                            <Route path="/admin/barChartAdmin" element={<ChartAdmin userId={userId}/>} />
                            <Route path="/admin/pieChartAdmin" element={<Piead userId={userId}/>} />
                        </Route>
                        <Route path="/manager" element={<Manager />}>
                            <Route path="/manager/dashboard" element={<Dashboard userId={userId}/>}/>       
                            <Route path="/manager/team" element={<Team userId={userId}/>} />
                            <Route path="/manager/task" element={<Task userId={userId}/>} />
                            <Route path="/manager/addTask" element={<AddTask userId={userId}/>} />
                            <Route path="/manager/updateTask/:id" element={<UpdateTask userId={userId}/>} />
                            <Route path="/manager/barChart" element={<Chart userId={userId}/>} />
                            <Route path="/manager/pieChart" element={<Pie userId={userId}/>} />
                            <Route path="/manager/lineChart" element={<Line userId={userId}/>} />
                            <Route path="/manager/bumpChart" element={<Bump userId={userId}/>} />
                            <Route path="/manager/barChart2" element={<BChart userId={userId}/>} />
                            <Route path="/manager/cardinalAreaChart" element={<CardinalAreaChart userId={userId}/>}/>
                    </Route>
                        <Route path="/user" element={<Projecthours />} />
                    </Routes>
               
                    
                    </main>
                </div>
            </ThemeProvider>
        
    )        
}

export default App;
