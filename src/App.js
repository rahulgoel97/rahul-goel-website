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
import  Pics from "./Metaverse";
import  Ideas from "./Ideas";
import  Books from "./Books";
import StressCalc from "./StressCalc";
import ReactGA from 'react-ga';


const TRACKING_ID = "G-05GMWBXW30"; 
ReactGA.initialize(TRACKING_ID);

function App() {

  return (
    <div className="App">
    
        <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/ideas" exact component={Ideas} />
            <Route path="/rahul-goel-website" exact component={Home} />
            <Route path="/music" exact component={Music}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/pics" exact component={Pics}/>
            <Route path="/books" exact component={Books}/>
            <Route path="/stresscalc" exact component={StressCalc}/>
            <Route path="/" render={()=>  <div className="notfound"> Yikes... 404 <br/><br/>
                <a href="/">🏠</a> </div>}/>
       </Switch>
        </HashRouter>

    </div>
  );
}

export default App;
