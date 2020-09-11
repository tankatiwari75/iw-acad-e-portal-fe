import React, {useEffect, useState} from 'react';
import {FaPlus, FaEdit, FaTrash, FaMinus, FaInfo} from 'react-icons/fa';
// import css
import "./managesubject.css"

// react-router-dom
import {Link} from "react-router-dom";

import { Table, Button } from "reactstrap"

function ManageSubject({match}) {
    useEffect(() => {
        fetchData();
      }, [])
    
      let sn = 1;
    
      const [data,
        setData] = useState([]);
    
      const fetchData = async() => {
        const fetchedData = await fetch("http://127.0.0.1:8000/adminsite/subjectregister/",
          {
            method: "GET",
            headers: {
              "Authorization": `Token ${localStorage.getItem('token')}`,
              "Content-Type": "application/json"
            }
        });
        const jsonFetchedData = await fetchedData.json();
        // console.log(jsonFetchedData);
        setData(jsonFetchedData);
        console.log(data)
      }

return (
<div className="maincontent">
   <div className="container">
       <div className="row">   
       
       <Link className="col-sm box btn-ripple nounderline" to='/add-subject'><FaPlus className='icons text-danger'/><h5 className="text-danger">Add</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/edit-subject'><FaMinus className='icons text-danger'/><h5 className="text-danger">Edit</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/delete-subject'><FaTrash className='icons text-danger'/><h5 className="text-danger">Remove</h5></Link>
       <Link className="col-sm box btn-ripple nounderline" to='/view-subject-detail'><FaInfo className='icons text-danger'/><h5 className="text-danger">View Detail</h5></Link>
       
       <Table bordered>
         <thead>
         <tr>
           <th>S.N</th>
           <th>Subject</th>
           <th>Classroom</th>
           <th>Action</th>
           </tr>
        </thead>
        
            
            <tbody>
            
            {data.map(subject => (
                <tr>
                  <th scope="row">{sn++}</th>
                  <td>{subject.subject_name}</td>

                  <td>{subject.class_number}</td>
                  <td>
                    <Link to={`${match.url}/view-subject-detail/${subject.id}`} className='col-sm'>
                      <FaInfo className='text-success'/>
                    </Link>                    
                    <Link to={`${match.url}/edit-subject/${subject.id}`} className='col-sm'>
                      <FaEdit className='text-primary'/>
                    </Link>
                    <Link to={`${match.url}/delete-subject/${subject.id}`} className='col-sm'>
                      <FaTrash className='text-danger'/>
                    </Link>
                    
                  </td>
                </tr>

              ))
}

            </tbody>
          </Table>
           
           {/* <div className="col-sm">Recent Activity</div> */}
       </div>
   </div>
</div>
);
}

export default ManageSubject; 
