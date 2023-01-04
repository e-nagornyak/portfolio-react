import React from 'react'
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import RemoteWork from "./RemoteWork/RemoteWork";
import MyProjects from "./MyProjects/MyProjects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
