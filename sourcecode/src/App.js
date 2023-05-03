import React from 'react';
import Login from "./components/Login";
import Admin from "./scenes/admin/Admin";
import Manager from "./scenes/manager/Manager"
//import Projects from "./components/admin/Projects";
//import Teams from "./components/admin/Teams";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";
import { mainTheme } from "./theme"

var isLoggedIn = true;

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
           {renderConditionally()}
        </ThemeProvider>
    )        
}

export default App;
