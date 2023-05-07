import React from 'react';
import Login, {role} from "./components/Login";
import Admin from "./scenes/admin/Admin";
import Home from "./components/Home"
//import Projects from "./components/admin/Projects";
//import Teams from "./components/admin/Teams";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";
import { mainTheme } from "./theme"
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Routes, Route } from "react-router-dom";
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';

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
            <ThemeProvider theme = { mainTheme } >
                <CssBaseline/>
                <div className='app'>
                    
                    <main className='content'>
                        <Topbar/>
                        <Sidebar/>
                        <Home />
                    </main>
                </div>
            </ThemeProvider>
        
    )        
}

export default App;
