import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
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
    
        <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rahul-goel-website" exact component={Home} />
            <Route path="/music" exact component={Music}/>
            <Route path="/rahul-goel-website/projects" exact component={Projects}/>
            <Route path="/rahul-goel-website/pics" exact component={Pics}/>
            <Route path="/" render={()=>  <div className="notfound"> Yikes... 404 </div>}/>
        </Switch>
        </HashRouter>

    </div>
  );
}

export default App;
