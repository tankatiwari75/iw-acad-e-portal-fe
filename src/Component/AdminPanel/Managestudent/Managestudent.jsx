import React from 'react';
import {FaPlus, FaTrash, FaMinus, FaInfo} from 'react-icons/fa';
// import css
import "./managestudent.css"

// react-router-dom
import {
    Link
  } from "react-router-dom";


import {

} from "reactstrap"
function Managestudent(props) {
return (
<div className="maincontent">
   <div className="container">
       <div className="row">
       <Link className="col-sm box btn-ripple nounderline" to='/add-student'><FaPlus className='icons text-danger'/><h5 className="text-danger">Add</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/edit-student'><FaMinus className='icons text-danger'/><h5 className="text-danger">Edit</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/remove-student'><FaTrash className='icons text-danger'/><h5 className="text-danger">Remove</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/view-student-detail'><FaInfo className='icons text-danger'/><h5 className="text-danger">View Detail</h5></Link>
       
           
           {/* <div className="col-sm">Recent Activity</div> */}
       </div>
   </div>
</div>
);
}

export default Managestudent
