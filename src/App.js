import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import  Home  from "./Home";
import  Music from "./Music";
import  Projects from "./Projects";
import  Pics from "./Pictures";

function App() {

  return (
    <div className="App">
    
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rahul-goel-website" exact component={Home} />
            <Route path="/music" exact component={Music}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/pics" exact component={Pics}/>
            <Route path="/" render={()=>  <div className="notfound"> Yikes... 404 </div>}/>
        </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
