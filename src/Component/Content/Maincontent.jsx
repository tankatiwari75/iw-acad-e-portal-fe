import React from 'react';
import {FaHome, FaUsers, FaPoll, FaClock, FaBookOpen, FaEnvelopeOpen} from 'react-icons/fa';
// import css
import "./maincontent.css"

import {

} from "reactstrap"
function Maincontent(props) {
return (
<div className="maincontent">
   <div className="container">
       <div className="row">
           <div className="col-sm box"><FaHome className='icons text-danger'/><h2 className="text-danger">Dashboard</h2></div>
           <div className="col-sm box"><FaUsers className='icons text-warning'/><h2 className="text-warning">Attendance</h2></div>
           <div className="col-sm box "><FaPoll className='icons text-primary'/><h2 className="text-primary">Results</h2></div>
           
           <div className="col-sm">Recent Activity</div>
       </div>
       <div className="row">
           <div className="col-sm box "><FaClock className='icons text-danger'/><h2 className="text-danger">Time Table</h2></div>
           <div className="col-sm box"><FaBookOpen className='icons text-warning'/><h2 className="text-warning">Exam Schedule</h2></div>
           <div className="col-sm box"><FaEnvelopeOpen className='icons text-primary'/><h2 className="text-primary">My Messages</h2></div>
           
           <div className="col-sm">Recent Activity</div>
       </div>
   </div>
</div>
);
}

export default Maincontent;