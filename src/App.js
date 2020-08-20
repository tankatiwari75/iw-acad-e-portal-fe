import React from 'react';
import './App.css';
import Navigation from './Component/Navigationbar/navigationbar'
import Maincontent from './Component/Content/Maincontent'
import Breadcrumber from "./Component/Breadcrumb/Breadcrumber"

// React-router-dom
import {BrowserRouter as Router, Route} from "react-router-dom";
// react-router-dom imported
// import profile, calendar
import Profile from "./Component/Content/Profile/Profile"
import Calendar from "./Component/Content/Calendar/Calendar"
import Notice from './Component/HomeContent/Notice/Notice';
import Attendance from './Component/HomeContent/Attendance/Attendance';
import Result from './Component/HomeContent/Result/Result';
import Timetable from './Component/HomeContent/Timetable/Timetable';
import Schedule from './Component/HomeContent/Schedule/Schedule';
import Logout from "./Component/Content/Logout/Logout"
// import Login from "./Component/Content/Login/Login"
 import AdminPanel from "./Component/AdminPanel/AdminPanel"
 import Managestudent from "./Component/AdminPanel/Managestudent/Managestudent"

import ManageTeacher from './Component/AdminPanel/ManageTeacher/ManageTeacher';
import ManageClass from './Component/AdminPanel/ManageClass/ManageClass';
import ManageSubject from './Component/AdminPanel/ManageSubject/ManageSubject';
import ManageNotice from './Component/AdminPanel/ManageNotice/ManageNotice';


// imported Profile
const login = true;
const  student = false;
const teacher = false;
const admin = true;

function App() {
  if (login && student){
  return (
    <Router>
      <div className="App bg-light">
        <Navigation/>
        <Breadcrumber titlename = "Rajeet"/>
        <Route path="/" exact component={Maincontent} />
        <Route path="/Profile" component={Profile} /> 
        <Route path='/calendar' component={Calendar} />
        <Route path='/notice' component={Notice}/>
        <Route path='/attendance' component={Attendance}/>
        <Route path='/result' component={Result}/>
        <Route path='/time-table' component={Timetable}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='/logout' component={Logout}/>
        {/* This is for message */}
        {/* <Route path='/schedule' component={Schedule}/> */}
        {/* this is for message */}
      </div>
    </Router>
    
  );}
  else if (login && admin) {
    return (
      <Router>
        <div className="App bg-light">
          <Navigation/>
          <Breadcrumber titlename = "Rajeet"/>
          <Route path="/" exact component={AdminPanel} />
          <Route path="/managestudent" component={Managestudent} /> 
          <Route path="/manageteacher" component={ManageTeacher} /> 
          <Route path="/manageclassroom" component={ManageClass} /> 
          <Route path="/managesubject" component={ManageSubject} /> 
          <Route path="/managenotice" component={ManageNotice} /> 


        </div>
      </Router>)
  }
}

export default App;
