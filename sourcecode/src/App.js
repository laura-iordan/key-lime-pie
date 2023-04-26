import React from 'react';
import Login from "./components/Login";
import Admin from "./components/Admin";

var isLoggedIn = true;

function renderConditionally(){
    if(isLoggedIn){
        return <Admin />
    } else{
        return <Login />
    }
}

function App(){
    return <div>
        {renderConditionally()}
    </div>
}

export default App;
