import React from 'react';
import {FaPlus, FaTrash, FaMinus, FaInfo} from 'react-icons/fa';
// import css
import "./managesubject.css"

// react-router-dom
import {
    Link
  } from "react-router-dom";


import {

} from "reactstrap"
function ManageSubject(props) {
return (
<div className="maincontent">
   <div className="container">
       <div className="row">
       <Link className="col-sm box btn-ripple nounderline" to='/add-subject'><FaPlus className='icons text-danger'/><h5 className="text-danger">Add</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/edit-subject'><FaMinus className='icons text-danger'/><h5 className="text-danger">Edit</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/delete-subject'><FaTrash className='icons text-danger'/><h5 className="text-danger">Remove</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/view-subject-detail'><FaInfo className='icons text-danger'/><h5 className="text-danger">View Detail</h5></Link>
       
           
           {/* <div className="col-sm">Recent Activity</div> */}
       </div>
   </div>
</div>
);
}

export default ManageSubject
