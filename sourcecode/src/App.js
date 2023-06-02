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
    const [userCredential, setUserCredential] = useState({
        idUser: 0,
        name: "",
        surname: "",
        email: ""
    })
    console.log(userCredential);
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
                <Route path="/admin/" element={<SidebarAdmin isSidebar={isSidebar} />}>
                    <Route path="/admin/:idUser" element={<SidebarAdmin isSidebar={isSidebar} />} />
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
                    <Route path="/manager/dashboard/:idUser" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>}/>       
                    <Route path="/manager/team/:idUser" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/task/:idUser" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/addTask/:idUser" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/updateTask/:idUser/:id" element={<SidebarAdmin isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/barChart/:idUser" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/pieChart/:idUser" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/lineChart/:idUser" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/bumpChart/:idUser" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/barChart2/:idUser" element={<SidebarManager isSidebar={isSidebar} userId={userId}/>} />
                    <Route path="/manager/cardinalAreaChart/:idUser" element={<CardinalAreaChart isSidebar={isSidebar} />}/>
                </Route>
                <Route path="/user" element={<SidebarManager isSidebar={isSidebar} />}/>
                </Routes>
               
                
                
                    <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                    
                    <Routes>
                        <Route path="/" element={<Login userCredential={userCredential} setUserCredential={setUserCredential} />} />
                        <Route path="/admin" element={<Admin userCredential={userCredential} setUserCredential={setUserCredential}/>}>
                            <Route path="/admin" element={<Employees />} />
                            <Route path="/admin/:idUser" element={<Employees />} />
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
                            <Route path="/manager/dashboard/:idUser" element={<Dashboard userId={userId}/>}/>       
                            <Route path="/manager/team/:idUser" element={<Team userId={userId}/>} />
                            <Route path="/manager/task/:idUser" element={<Task userId={userId}/>} />
                            <Route path="/manager/addTask/:idUser" element={<AddTask userId={userId}/>} />
                            <Route path="/manager/updateTask/:idUser/:id" element={<UpdateTask userId={userId}/>} />
                            <Route path="/manager/barChart/:idUser" element={<Chart userId={userId}/>} />
                            <Route path="/manager/pieChart/:idUser" element={<Pie userId={userId}/>} />
                            <Route path="/manager/lineChart/:idUser" element={<Line userId={userId}/>} />
                            <Route path="/manager/bumpChart/:idUser" element={<Bump userId={userId}/>} />
                            <Route path="/manager/barChart2/:idUser" element={<BChart userId={userId}/>} />
                            <Route path="/manager/cardinalAreaChart/:idUser" element={<CardinalAreaChart userId={userId}/>}/>
                    </Route>
                        <Route path="/user" element={<Projecthours />} />
                    </Routes>
               
                    
                    </main>
                </div>
            </ThemeProvider>
        
    )        
}

export default App;
