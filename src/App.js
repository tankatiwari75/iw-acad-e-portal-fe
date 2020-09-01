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
import Logout from "./Component/Logout/Logout"
import Login from "./Component/Login/Login"

// import admin views
 import AdminPanel from "./Component/AdminPanel/AdminPanel"
 import Managestudent from "./Component/AdminPanel/Managestudent/Managestudent"


import ManageClass from './Component/AdminPanel/ManageClass/ManageClass';
import ManageSubject from './Component/AdminPanel/ManageSubject/ManageSubject';
import ManageNotice from './Component/AdminPanel/ManageNotice/ManageNotice';
import AddStudent from "./Component/AdminPanel/Managestudent/AddStudent/AddStudent"
import StudentDetail from './Component/AdminPanel/Managestudent/StudentDetail/StudentDetail';

//for teacher crud
import ManageTeacher from './Component/AdminPanel/ManageTeacher/ManageTeacher';
import AddTeacher from "./Component/AdminPanel/ManageTeacher/AddTeacher/AddTeacher";
import EditTeacher from "./Component/AdminPanel/ManageTeacher/EditTeacher/EditTeacher";
import DeleteTeacher from "./Component/AdminPanel/ManageTeacher/DeleteTeacher/DeleteTeacher";
import TeacherDetail from './Component/AdminPanel/ManageTeacher/TeacherDetail/TeacherDetail';

import RoleAssignTeacher from "./Component/AdminPanel/ManageTeacher/RoleAssignTeacher/roleassignteacher";


//import teacher views
import TeacherPanel from "./Component/Teacher/TeacherPanel"
import TeacherNotice from "./Component/Teacher/TeacherNotice/TeacherNotice"
import DeleteStudent from './Component/AdminPanel/Managestudent/DeleteStudent/DeleteStudent';





// imported Profile
const login = true;
const  student = true;
const teacher = false;
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
          <Route path="/managestudent" exact component={Managestudent} />


          <Route path="/manageteacher" component={ManageTeacher} />
          <Route path="/manageteacher/add-teacher" component={AddTeacher} />
          <Route path="/manageteacher/edit-teacher" component={EditTeacher} />
          <Route path="/manageteacher/role-assign-teacher" component={RoleAssignTeacher} />

          <Route path="/manageteacher/delete-teacher" component={DeleteTeacher} />
          <Route path="/manageteacher/view-teacher-detail/:id" component={TeacherDetail} />


          <Route path="/manageclassroom" component={ManageClass} /> 
          <Route path="/managesubject" component={ManageSubject} /> 
          <Route path="/managenotice" component={ManageNotice} />
          <Route path="/managestudent/add-student" component = {AddStudent} /> 
          <Route path="/managestudent/view-student-detail/:id" component = {StudentDetail} /> 
          <Route path="/managestudent/delete-student/:id" component = {DeleteStudent} /> 

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
      <div>
        <Login />
      </div>
      )
  }
}

export default App;
