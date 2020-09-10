import React, {useEffect, useState} from 'react'
import {FaPlus, FaTrash, FaMinus, FaEdit,FaInfo} from 'react-icons/fa';
import {Button, Table} from "reactstrap"
import {Link} from "react-router-dom"


export default function Message({match}) {
  const [studentDetail, setStudentDetail] = useState([]);
  const [messageData, setMessageData] = useState([])
  const fetch_message = async () =>{
    const fetchMessage = await fetch("http://127.0.0.1:8000/adminsite/directmessage/",
    {
      method: 'GET',
      headers: {
       "Authorization": `Token ${localStorage.getItem('token')}`,
       "Content-Type": "application/json"
     },
    })
    const fetchmessagejson = await fetchMessage.json()
    const teacherMessageFilter = fetchmessagejson.filter(msg => msg.teacher_name == 1)
    setMessageData(teacherMessageFilter)
    console.log(messageData)
  }

  const fetch_student_detail = async() =>{
    const fetchDetail = await fetch("http://127.0.0.1:8000/adminsite/studentregister/",
    {
      method: 'GET',
      headers: {
       "Authorization": `Token ${localStorage.getItem('token')}`,
       "Content-Type": "application/json"
     }, 
    })
    const fetchedStudentDetail = await fetchDetail.json()
    setStudentDetail(fetchedStudentDetail)
    console.log(studentDetail)
  }
  useEffect(() =>{
    fetch_message();
    fetch_student_detail();
  }, [])
  return (
    <div>
      <div className="maincontent">
      <div className="container">
        <div className="row">
          <Link to={`${match.url}/create-message`}>
            <Button color='primary'>Add Message &nbsp;
            <FaPlus className='text-light'/></Button>
          </Link>
          <Table bordered>
            <thead>
              <tr>
                <th>To:</th>
                <th>Message</th>
                {/* <th></th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                messageData.map(message=>(
                  <tr>
                    {studentDetail.map(student=>(
                      student.admission_number == message.student_admission_number ? <td>{
                        student.student_user.first_name + " " + student.student_user.middle_name + " " + student.student_user.last_name}</td> : null
                      ))}
                    <td>{message.message}</td>
                    <td><Link to={`${match.url}/delete-message/${message.id}`} className='col-sm'>
                      <FaTrash className='text-danger'/>
                    </Link></td>
                  </tr>
                ))
                }

              {/* {data.map(teacher => (
                <tr>
                  <th scope="row">{sn++}</th>
                  <td>{teacher.first_name + "  " + teacher.middle_name + " " + teacher.last_name}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phonenumber}</td>
                  <td>{teacher.qualification}</td>
                  <td>
                    <Link to={`${match.url}/view-teacher-detail/${teacher.id}`} className='col-sm'>
                      <FaInfo className='text-success'/>
                    </Link>
                    <Link to={`${match.url}/edit-teacher/${teacher.id}`} className='col-sm'>
                      <FaEdit className='text-primary'/>
                    </Link>
                    <Link to={`${match.url}/delete-teacher/${teacher.id}`} className='col-sm'>
                      <FaTrash className='text-danger'/>
                    </Link>

                  </td>
                </tr>

              ))
} */}

            </tbody>
          </Table>

          {/* <Link className="col-sm box btn-ripple nounderline" to='/add-student'><FaPlus className='icons text-danger'/><h5 className="text-danger">Add Student</h5></Link> */}
          {/* <Link className="col-sm box btn-ripple nounderline" to='/edit-student'><FaMinus className='icons text-danger'/><h5 className="text-danger">Edit</h5></Link> */}
          {/* <Link className="col-sm box btn-ripple nounderline" to='/remove-student'><FaTrash className='icons text-danger'/><h5 className="text-danger">Remove</h5></Link> */}
          {/* <Link className="col-sm box btn-ripple nounderline" to='/view-student-detail'><FaInfo className='icons text-danger'/><h5 className="text-danger">View Detail</h5></Link> */}
        </div>
      </div>
    </div>
    </div>
  )
}
