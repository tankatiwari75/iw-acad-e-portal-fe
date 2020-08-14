import React from 'react';
import {FaHome, FaUsers, FaPoll, FaClock, FaBookOpen, FaEnvelopeOpen} from 'react-icons/fa';
// import css
import "./maincontent.css"

// react-router-dom
import {
    Link
  } from "react-router-dom";


import {

} from "reactstrap"
function Maincontent(props) {
return (
<div className="maincontent">
   <div className="container">
       <div className="row">
           <Link className="col-sm box btn-ripple nounderline" to='/dashboard'><h1><FaHome className='icons text-danger'/></h1><h5 className="text-danger">Dashboard</h5></Link>
           <Link className="col-sm box btn-ripple nounderline" to='/attendance'><FaUsers className='icons text-warning'/><h5 className="text-warning">Attendance</h5></Link>
           <Link className="col-sm box btn-ripple nounderline" to='/result'><FaPoll className='icons text-primary'/><h5 className="text-primary">Results</h5></Link>
           
           {/* <div className="col-sm">Recent Activity</div> */}
       </div>
       <div className="row">
       <Link className="col-sm box btn-ripple nounderline" to='/time-table'><FaClock className='icons text-danger'/><h5 className="text-danger">Time Table</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/schedule'><FaBookOpen className='icons text-warning'/><h5 className="text-warning">Exam Schedule</h5></Link>
           <div className="col-sm box btn-ripple"><FaEnvelopeOpen className='icons text-primary'/><h5 className="text-primary">My Messages</h5></div>
           
           {/* <div className="col-sm">Recent Activity</div> */}
       </div>
   </div>
</div>
);
}

export default Maincontent;