import React, {useEffect, useState} from 'react';
import {FaPlus, FaEdit, FaInfo, FaTrash} from 'react-icons/fa';
// import css
import "./managestudent.css"

// react-router-dom
import {Link} from "react-router-dom";

import {Table, Button} from "reactstrap"

function Managestudent({match}) { 

  // const [studentdata, setStudentdata] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  let sn = 1;

  const [data,
    setData] = useState([]);

  const fetchData = async() => {
    const fetchedData = await fetch("https://e-portal-application.herokuapp.com/adminsite/studentregister/",
    {
      method: "GET",
      headers: {
        "Authorization": `Token ${localStorage.getItem('token')}`,
        "Content-Type": "application/json"
      }
    }
    );
    const jsonFetchedData = await fetchedData.json();
    // console.log(jsonFetchedData);
    setData(jsonFetchedData);
    console.log(data)
  }

return (
    <div className="maincontent">
      <div className="container">
        <div className="row">
          <Link to={`${match.url}/add-student`}>
            <Button color='primary'>Add Student &nbsp;
            <FaPlus className='text-light'/></Button>
          </Link> 
          
            
          {/* <Link className="col-sm box btn-ripple nounderline" to='/add-student'><FaPlus className='icons text-danger'/><h5 className="text-danger">Add Student</h5></Link> */}
          {/* <Link className="col-sm box btn-ripple nounderline" to='/edit-student'><FaMinus className='icons text-danger'/><h5 className="text-danger">Edit</h5></Link> */}
          {/* <Link className="col-sm box btn-ripple nounderline" to='/remove-student'><FaTrash className='icons text-danger'/><h5 className="text-danger">Remove</h5></Link> */}
          {/* <Link className="col-sm box btn-ripple nounderline" to='/view-student-detail'><FaInfo className='icons text-danger'/><h5 className="text-danger">View Detail</h5></Link> */}
          <Table bordered>
            <thead>
              <tr>
                <th>Admission Number</th>
                <th>Name</th>
                <th>Username</th>
                <th>Class</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
          <th scope="row">1</th>
          <td>ok google</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Detail || Delete || Update</td>
          </tr> */}

              {data.map(student => (
                <tr>
                  <th scope="row">{student.admission_number}</th>
                  <td>{student.student_user.first_name + " " + student.student_user.last_name}</td>
                  <td>{student.student_user.username}</td>
                  <td>{student.class_number}</td>
                  <td>{student.address}</td>

                  <td>
                    <Link to={`${match.url}/view-student-detail/${student.id}`} className='col-sm'>
                      <FaInfo className='text-success'/>
                    </Link>                    
                    <Link to={`${match.url}/edit-student/${student.id}`} className='col-sm'>
                      <FaEdit className='text-primary'/>
                    </Link>
                    <Link to={`${match.url}/delete-student/${student.id}`} className='col-sm'>
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

export default Managestudent
