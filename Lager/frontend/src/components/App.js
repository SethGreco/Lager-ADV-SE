import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Printable from "./Printable";
import Home from "./Home"
import EntryView from "./EntryView"

import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <React.Fragment>
    <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Printable">Printable View</NavLink></li>
          <li><NavLink to="/EntryView">Entry</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/Printable" component={Printable}/>
          <Route path="/EntryView" component={EntryView}/>
        </div>
      </div>
    </HashRouter>
  </React.Fragment>
);


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;