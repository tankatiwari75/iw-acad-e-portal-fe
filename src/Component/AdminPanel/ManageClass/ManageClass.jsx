import React from 'react';
import {FaPlus, FaTrash, FaMinus, FaInfo} from 'react-icons/fa';
// import css
import "./manageclass.css"

// react-router-dom
import {
    Link
  } from "react-router-dom";


import {

} from "reactstrap"
function ManageClass(props) {
return (
<div className="maincontent">
   <div className="container">
       <div className="row">
       <Link className="col-sm box btn-ripple nounderline" to='/add-class'><FaPlus className='icons text-danger'/><h5 className="text-danger">Add</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/edit-class'><FaMinus className='icons text-danger'/><h5 className="text-danger">Edit</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/delete-class'><FaTrash className='icons text-danger'/><h5 className="text-danger">Remove</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/view-class-detail'><FaInfo className='icons text-danger'/><h5 className="text-danger">View Detail</h5></Link>
       
           
           {/* <div className="col-sm">Recent Activity</div> */}
       </div>
   </div>
</div>
);
}

export default ManageClass
