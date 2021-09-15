import { title } from 'process';
import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myProjects/MyProjects";
import {Contacts} from "./contacts/Contacts";
import {Footers} from "./footer/Footers";

function App() {
    return (
        <div className="App">

            <Header/>
            <Main/>
            <Skills />
            <MyProjects/>
            <Contacts/>
            <Footers/>
        </div>
    );
}

export default App;
