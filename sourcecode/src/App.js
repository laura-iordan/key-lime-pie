import React, { useState } from 'react';
import Login, {role} from "./components/Login";
import Admin from "./scenes/admin/Admin";
import Home from "./components/Home"
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";
import { mainTheme } from "./theme"
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
    const [isSidebar, setIsSidebar] = useState(true);
    return (
            <ThemeProvider theme = { mainTheme } >
                <CssBaseline/>
                <div className="app">
                <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                        <Home />
                    </main>
                </div>
            </ThemeProvider>
        
    )        
}

export default App;
