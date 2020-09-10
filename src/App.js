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
import CalenderDetails from "./Component/NavbarContent/Calendar/Calendar"
import Notice from './Component/StudentPanel/Notice/Notice';
import Attendance from './Component/StudentPanel/Attendance/Attendance';
import Result from './Component/StudentPanel/Result/Result';
import Timetable from './Component/StudentPanel/Timetable/Timetable';
import Schedule from './Component/StudentPanel/Schedule/Schedule';
import Logout from "./Component/Logout/Logout"
import Login from "./Component/Login/Login"

// import admin views
 import AdminPanel from "./Component/AdminPanel/AdminPanel"
 import Managestudent from "./Component/AdminPanel/Managestudent/Managestudent"

import ManageTeacher from './Component/AdminPanel/ManageTeacher/ManageTeacher';
import ManageClass from './Component/AdminPanel/ManageClass/ManageClass';
import ManageSubject from './Component/AdminPanel/ManageSubject/ManageSubject';
import AddNotice from './Component/AdminPanel/ManageNotice/AddNotice/AddNotice';
import DeleteNotice from './Component/AdminPanel/ManageNotice/DeleteNotice/DeleteNotice';
import UpdateNotice from './Component/AdminPanel/ManageNotice/UpdateNotice/UpdateNotice';

import ManageNotice from './Component/AdminPanel/ManageNotice/ManageNotice';

//import teacher views
import TeacherPanel from "./Component/Teacher/TeacherPanel"
import TeacherNotice from "./Component/Teacher/TeacherNotice/TeacherNotice"
import TeacherAttendance from "./Component/Teacher/TeacherAttendance/TeacherAttendance"
import AddNewStudentForAttendance from "./Component/Teacher/TeacherAttendance/AddNewStudentForAttendance/AddNewStudentForAttendance"
import UpdateAttendance from "./Component/Teacher/TeacherAttendance/UpdateAttendance/UpdateAttendance"
import TeacherResult from "./Component/Teacher/TeacherResult/TeacherResult"
import AddNewStudentForResult from './Component/Teacher/TeacherResult/AddNewStudentForResult/AddNewStudentForResult';
import UpdateResult from './Component/Teacher/TeacherResult/UpdateResult/UpdateResult'




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
        <Route path='/calendar' component={CalenderDetails} />
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
          <Route path="/managenotice" exact component={ManageNotice} /> 
          <Route path="/managenotice/add-notice" component={AddNotice}/>
          <Route path="/managenotice/delete-notice/:id" component={DeleteNotice}/>
          <Route path="/managenotice/update-notice/:id" component={UpdateNotice}/>
          <Route path='/calendar' component={CalenderDetails} />
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

          {/* for attendance */}
          <Route path="/attendance-upload" exact component={TeacherAttendance} />
          <Route path="/attendance-upload/add-newstudent-attendance/:teacher_id/:class_number/:subject_name" component={AddNewStudentForAttendance}/>
          <Route path="/result-upload/add-newstudent-result/:teacher_id/:class_number/:subject_name" component={AddNewStudentForResult}/>
          <Route path="/attendance-upload/update-attendance/:id" component={UpdateAttendance}/>
          <Route path="/result-upload/update-result/:id" component={UpdateResult}/>
          <Route path="/result-upload" exact component={TeacherResult}/>
          <Route path='/calendar' component={CalenderDetails} />
          <Route path='/logout' component={Logout}/>

         


        </div>
      </Router>
      )
  }
  else{
    return (
      <div>
        <Login />
      </div>
      )
  }
}

export default App;
