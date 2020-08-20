import React from 'react';
import {FaBell, FaClock, FaChalkboard, FaSlideshare, FaChalkboardTeacher} from 'react-icons/fa';
// import css
import "./adminpanel.css"

// react-router-dom
import {
    Link
  } from "react-router-dom";


import {

} from "reactstrap"
function AdminPanel(props) {
return (
<div className="maincontent">
   <div className="container">
       <div className="row">
       <Link className="col-sm box btn-ripple nounderline" to='/managestudent'><FaSlideshare className='icons text-danger'/><h5 className="text-danger">Manage Student</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/manageteacher'><FaChalkboardTeacher className='icons text-warning'/><h5 className="text-warning">Manage Teacher</h5></Link>
        <Link className="col-sm box btn-ripple nounderline" to="/managenotice"><FaBell className='icons text-primary'/><h5 className="text-primary">Notice</h5></Link>
           
           {/* <div className="col-sm">Recent Activity</div> */}
       </div>
       <div className="row">
       <Link className="col-sm box btn-ripple nounderline" to='/manageclassroom'><FaClock className='icons text-danger'/><h5 className="text-danger">Manage Classroom</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/managesubject'><FaChalkboard className='icons text-warning'/><h5 className="text-warning">Manage Subject</h5></Link>
           
           {/* <div className="col-sm">Recent Activity</div> */}
       </div>
   </div>
</div>
);
}

export default AdminPanel
