import React from 'react';
import './App.css';
import Navigation from './Component/Navigationbar/navigationbar'
import StudentPanel from './Component/NavbarContent/StudentPanel'
import Breadcrumber from "./Component/Breadcrumb/Breadcrumber"

// React-router-dom
import {BrowserRouter as Router, Route} from "react-router-dom";
// react-router-dom imported
// import profile, calendar
import Profile from "./Component/NavbarContent/Profile/Profile"
import Calendar from "./Component/NavbarContent/Calendar/Calendar"
import Notice from './Component/StudentPanel/Notice/Notice';
import Attendance from './Component/StudentPanel/Attendance/Attendance';
import Result from './Component/StudentPanel/Result/Result';
import Timetable from './Component/StudentPanel/Timetable/Timetable';
import Schedule from './Component/StudentPanel/Schedule/Schedule';
import Logout from "./Component/NavbarContent/Logout/Logout"
// import Login from "./Component/Login/Login"

// import admin views
 import AdminPanel from "./Component/AdminPanel/AdminPanel"
 import Managestudent from "./Component/AdminPanel/Managestudent/Managestudent"

import ManageTeacher from './Component/AdminPanel/ManageTeacher/ManageTeacher';
import ManageClass from './Component/AdminPanel/ManageClass/ManageClass';
import ManageSubject from './Component/AdminPanel/ManageSubject/ManageSubject';
import ManageNotice from './Component/AdminPanel/ManageNotice/ManageNotice';

//import teacher views
import TeacherPanel from "./Component/Teacher/TeacherPanel"
import TeacherNotice from "./Component/Teacher/TeacherNotice/TeacherNotice"




// imported Profile
const login = true;
const  student = false;
const teacher = true;
const admin = false;

function App() {
  if (login && student){
  return (
    <Router>
      <div className="App bg-light">
        <Navigation/>
        <Breadcrumber titlename = "Rajeet"/>
        <Route path="/" exact component={StudentPanel} />
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

          <Route path='/calendar' component={Calendar} />
          <Route path='/logout' component={Logout}/>



        </div>
      </Router>)
  }
  else if (login && teacher){
    return (
      <Router>
        <div className="App bg-light">
          <Navigation/>
          <Breadcrumber titlename = "Rajeet"/>
          <Route path="/" exact component={TeacherPanel} />
          <Route path="/notice" component={TeacherNotice} /> 


          <Route path='/calendar' component={Calendar} />
          <Route path='/logout' component={Logout}/>

         


        </div>
      </Router>
      )
  }
  else{
    return (
      <Router>
        
      </Router>
      )
  }
}

export default App;
