import React, {useEffect, useState} from 'react';
import {FaPlus, FaTrash, FaMinus, FaEdit,FaInfo} from 'react-icons/fa';
// import css
import "./manageteacher.css"

// react-router-dom
import {
    Link
  } from "react-router-dom";


import {

} from "reactstrap"



import {Table, Button} from "reactstrap"


function ManageTeacher({match}) {



  useEffect(() => {
    fetchData();
  }, [])

  let sn = 1;

  const [data,
    setData] = useState([]);

  const fetchData = async() => {
    const fetchedData = await fetch("http://127.0.0.1:8000/adminsite/teacherregister/",{
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
          <Link to={`${match.url}/add-teacher`}>
            <Button color='primary'>Add Teacher &nbsp;
            <FaPlus className='text-light'/></Button>
          </Link>
          <Table bordered>
            <thead>
              <tr>
                <th>Teacher Unique Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Qualification</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {data.map(teacher => (
                <tr>
                  <th scope="row">{teacher.teacher_unique_id}</th>
                  <td>{teacher.teacher_user.first_name + "  " + teacher.teacher_user.middle_name + " " + teacher.teacher_user.last_name}</td>
                  <td>{teacher.teacher_user.username}</td>
                  <td>{teacher.teacher_user.email}</td>
                  <td>{teacher.phone_no}</td>
                  <td>{teacher.qualifications}</td>
                  <td>
                    {/* <Link to={`${match.url}/view-teacher-detail/${teacher.id}`} className='col-sm'>
                      <FaInfo className='text-success'/>
                    </Link> */}
                    {/* <Link to={`${match.url}/edit-teacher/${teacher.id}`} className='col-sm'>
                      <FaEdit className='text-primary'/>
                    </Link> */}
                    <Link to={`${match.url}/delete-teacher/${teacher.id}`} className='col-sm'>
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

export default ManageTeacher





// function ManageTeacher(props) {
// return (
// <div className="maincontent">
//    <div className="container">
//        <div className="row">
//        <Link className="col-sm box btn-ripple nounderline" to='/add-teacher'><FaPlus className='icons text-danger'/><h5 className="text-danger">Add</h5></Link>
//        <Link className="col-sm box btn-ripple nounderline" to='/edit-teacher'><FaMinus className='icons text-danger'/><h5 className="text-danger">Edit</h5></Link>
//        <Link className="col-sm box btn-ripple nounderline" to='/delete-teacher'><FaTrash className='icons text-danger'/><h5 className="text-danger">Remove</h5></Link>
//        <Link className="col-sm box btn-ripple nounderline" to='/view-teacher-detail'><FaInfo className='icons text-danger'/><h5 className="text-danger">View Detail</h5></Link>
//
//
//            {/* <div className="col-sm">Recent Activity</div> */}
//        </div>
//    </div>
// </div>
// );
// }


