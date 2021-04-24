import { Switch, Route } from 'react-router-dom';
import Home from "../view/Home";
import About from "../view/About";
import Project from "../view/Project";


export default function SwitchRouters(){
    return (
        <Switch>
        <Route path="/about">
          <About />
       
        </Route>
        <Route path="/project">
          <Project />
       
        </Route>
        <Route path="/">
          <Home /> 
       
        </Route> 
      
        </Switch>
    )
};