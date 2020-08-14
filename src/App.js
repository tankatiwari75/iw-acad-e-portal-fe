import React from 'react';
import './App.css';
import Navigation from './Component/Navigationbar/navigationbar'
import Maincontent from './Component/Content/Maincontent'
import Breadcrumber from "./Component/Breadcrumb/Breadcrumber"

// React-router-dom
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// react-router-dom imported
// import profile, calendar
import Profile from "./Component/Content/Profile/Profile"
import Calendar from "./Component/Content/Calendar/Calendar"
import Dashboard from './Component/HomeContent/Dashboard/Dashboard';
import Attendance from './Component/HomeContent/Attendance/Attendance';
import Result from './Component/HomeContent/Result/Result';
import Timetable from './Component/HomeContent/Timetable/Timetable';
import Schedule from './Component/HomeContent/Schedule/Schedule';

// imported Profile

function App() {
  return (
    <Router>
      <div className="App bg-light">
        <Navigation/>
        <Breadcrumber/>
        <Route path="/" exact component={Maincontent} />
        <Route path="/Profile" component={Profile} /> 
        <Route path='/calendar' component={Calendar} />
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/attendance' component={Attendance}/>
        <Route path='/result' component={Result}/>
        <Route path='/time-table' component={Timetable}/>
        <Route path='/schedule' component={Schedule}/>
        {/* This is for message */}
        {/* <Route path='/schedule' component={Schedule}/> */}
        {/* this is for message */}
      </div>
    </Router>

  );
}

export default App;
