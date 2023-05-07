import React from 'react';
import Login, {role} from "./components/Login";
import Admin from "./scenes/admin/Admin";
import Home from "./components/Home"
//import Projects from "./components/admin/Projects";
//import Teams from "./components/admin/Teams";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";
import { mainTheme } from "./theme"
import { ProSidebarProvider, Sidebar } from 'react-pro-sidebar';
import { Routes, Route } from "react-router-dom";
import Topbar from './scenes/global/Topbar';

var isLoggedIn = false;

function renderConditionally(){
    if(isLoggedIn){
        return <Admin />
    } else{
        return <Login />
    }
}



function App() {
    return (
        <ProSidebarProvider>
            <ThemeProvider theme = { mainTheme } >
                <CssBaseline/>
                <div className='app'>
                    <Sidebar/>
                    <main className='content'>
                        <Topbar/>
                        <Home />
                    </main>
                </div>
            </ThemeProvider>
        </ProSidebarProvider>
        
    )        
}

export default App;
