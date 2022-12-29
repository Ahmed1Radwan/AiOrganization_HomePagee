import React from "react";

import { Navbar, Cta, Brand } from './components';
import { Header, WhatGPT3, Features, Possibility, Blog, Footer} from './containers';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient-bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default App;