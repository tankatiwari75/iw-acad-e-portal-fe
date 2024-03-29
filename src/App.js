import React, {useEffect}from 'react';
import './App.css';
import Navigation from './Component/Navigationbar/navigationbar'
import StudentPanel from './Component/StudentPanel/StudentPanel'
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
import StudentMessage from "./Component/StudentPanel/StudentMessage/StudentMessage"


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
import AddStudent from "./Component/AdminPanel/Managestudent/AddStudent/AddStudent"
import StudentDetail from './Component/AdminPanel/Managestudent/StudentDetail/StudentDetail';
import AddTeacher from "./Component/AdminPanel/ManageTeacher/AddTeacher/AddTeacher";
import DeleteTeacher from "./Component/AdminPanel/ManageTeacher/DeleteTeacher/DeleteTeacher";
import TeacherDetail from './Component/AdminPanel/ManageTeacher/TeacherDetail/TeacherDetail';
import AddSubject from "./Component/AdminPanel/ManageSubject/AddSubject/AddSubject";
import EditSubject from "./Component/AdminPanel/ManageSubject/EditSubject/EditSubject";
import DeleteSubject from "./Component/AdminPanel/ManageSubject/DeleteSubject/DeleteSubject";
import SubjectDetail from "./Component/AdminPanel/ManageSubject/SubjectDetail/SubjectDetail";
import AddClass from "./Component/AdminPanel/ManageClass/AddClass/AddClass";
import DeleteClass from "./Component/AdminPanel/ManageClass/DeleteClass/DeleteClass";  

import TeacherAttendance from "./Component/Teacher/TeacherAttendance/TeacherAttendance"
import AddNewStudentForAttendance from "./Component/Teacher/TeacherAttendance/AddNewStudentForAttendance/AddNewStudentForAttendance"
import UpdateAttendance from "./Component/Teacher/TeacherAttendance/UpdateAttendance/UpdateAttendance"
import TeacherResult from "./Component/Teacher/TeacherResult/TeacherResult"
import AddNewStudentForResult from './Component/Teacher/TeacherResult/AddNewStudentForResult/AddNewStudentForResult';
import UpdateResult from './Component/Teacher/TeacherResult/UpdateResult/UpdateResult'
//import teacher views
import TeacherPanel from "./Component/Teacher/TeacherPanel"
import TeacherNotice from "./Component/Teacher/TeacherNotice/TeacherNotice"
import EditStudent from "./Component/AdminPanel/Managestudent/EditStudent/EditStudent"
import DeleteStudent from './Component/AdminPanel/Managestudent/DeleteStudent/DeleteStudent';
import Footer from './Component/Footer/footer';
// import TeacherAttendance from "./Component/Teacher/TeacherAttendance/TeacherAttendance"
// import Manage from './Component/Teacher/DirectMessage/Manage';
import Message from './Component/Teacher/DirectMessage/Message';
import DeleteMessage from "./Component/Teacher/DirectMessage/DeleteMessage/DeleteMessage";
import CreateMessage from './Component/Teacher/DirectMessage/CreateMessage/CreateMessage';

// imported Profile
const username = localStorage.getItem("username")
const token = localStorage.getItem("token")




// import DeleteStudent from './Component/AdminPanel/Managestudent/DeleteStudent/DeleteStudent';


function App() {
    console.log(username + token);

  if (token!=0 && username){
    if(username.slice(0,4) =="stu."){
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
        <Route path='/message' component={StudentMessage} />
        {/* This is for message */}
        {/* <Route path='/schedule' component={Schedule}/> */}
        {/* this is for message */}
      </div>
    </Router>
    
  );}
   else if (username.slice(0,4) !=="stu." && username.slice(0,4) !== "tea."){
    return (
      <Router>
        <div className="App bg-light">
          <Navigation/>
          <Breadcrumber titlename = "Rajeet"/>
          <Route path="/" exact component={AdminPanel} />
          <Route path="/Profile" component={Profile} /> 

          <Route path="/managestudent" exact component={Managestudent} /> 
          <Route path="/manageteacher" exact component={ManageTeacher} />
          <Route path="/manageteacher/add-teacher" component={AddTeacher} />
          <Route path="/manageteacher/delete-teacher/:id" component={DeleteTeacher} />
          <Route path="/manageteacher/view-teacher-detail/:id" component={TeacherDetail} />
          <Route path="/manageclassroom" exact component={ManageClass} /> 
          <Route path="/manageclassroom/add-classroom" component={AddClass} />
          <Route path="/managesubject" component={ManageSubject} /> 

          <Route path="/managenotice" component={ManageNotice} />
          <Route path="/managestudent/add-student"  component = {AddStudent} />
          <Route path="/managestudent/view-student-detail/:id" component = {StudentDetail} /> 
          <Route path="/managestudent/delete-student/:id" component = {DeleteStudent} /> 
          <Route path="/managestudent/edit-student/:id" component={EditStudent} />
          <Route path="/add-subject" component = {AddSubject} /> 
          <Route path="/edit-subject" component = {EditSubject} /> 
          <Route path="/delete-subject" component = {DeleteSubject} />
          <Route path="/view-subject-detail" component = {SubjectDetail} /> 
          <Route path="/delete-class" component = {DeleteClass} /> 
          <Route path='/logout' component={Logout}/> 

          <Route path="/managenotice/add-notice" component={AddNotice}/>
          <Route path="/managenotice/delete-notice/:id" component={DeleteNotice}/>
          <Route path="/managenotice/update-notice/:id" component={UpdateNotice}/>
          <Route path='/calendar' component={CalenderDetails} />
          {/* //<Route path='/calendar' component={Calendar} /> */}



        </div>
      </Router>)
  }
  else if (username.slice(0,4) =="tea."){
    return (
      <Router>
        <div className="App bg-light">
          <Navigation/>
          <Breadcrumber titlename = "Rajeet"/>
          <Route path="/Profile" component={Profile} /> 
          <Route path="/" exact component={TeacherPanel} />
          <Route path="/notice" component={TeacherNotice} />
          <Route path="/attendance-upload" exact component={TeacherAttendance} />  
          <Route path="/message" exact component={Message} />
          <Route path="/message/delete-message/:id" exact component={DeleteMessage} />
          <Route path="/message/create-message/" exact component={CreateMessage} />
          {/* for attendance */}
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
  }}
  
  else{
    
    return (
      <div>
        <Login />
      </div>
      )
  }
} 

export default App;
