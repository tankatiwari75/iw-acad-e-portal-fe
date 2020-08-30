import React from 'react';
import {FaUsers, FaPoll, FaClock, FaBookOpen, FaEnvelopeOpen, FaBell} from 'react-icons/fa';
// import css
import "./teacherpanel.css"

// react-router-dom
import {
    Link
  } from "react-router-dom";


import {

} from "reactstrap"

function TeaacherPanel(props) {
return (
<div className="maincontent">
   <div className="container">
       <div className="row">
           <Link className="col-sm box btn-ripple nounderline" to='/notice'><h1><FaBell className='icons text-danger'/></h1><h5 className="text-danger">Notice</h5></Link>
           <Link className="col-sm box btn-ripple nounderline" to='/attendance-upload'><FaUsers className='icons text-warning'/><h5 className="text-warning">Attendance</h5></Link>
           <Link className="col-sm box btn-ripple nounderline" to='/result'><FaPoll className='icons text-primary'/><h5 className="text-primary">Results</h5></Link>
           
           {/* <div className="col-sm">Recent Activity</div> */}
       </div>
   </div>
</div>
);
}

export default TeaacherPanel;