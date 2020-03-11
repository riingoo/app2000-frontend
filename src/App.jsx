import React from 'react';
import './App.css';
import Scaffold from "./scaffold";
import {BrowserRouter} from "react-router-dom";
import CategoryCard from "./feature/home/category-card";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Scaffold/>
            </div>
        </BrowserRouter>
    );
}

export default App;
