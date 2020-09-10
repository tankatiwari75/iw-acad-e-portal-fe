import React, {useEffect, useState} from 'react'
import {FaPlus, FaTrash, FaMinus, FaEdit,FaInfo} from 'react-icons/fa';
import {Button, Table} from "reactstrap"
import {Link} from "react-router-dom"


export default function Message({match}) {
  const [teacherDetail, setTeacherDetail] = useState([]);
  const [messageData, setMessageData] = useState([])
  const fetch_message = async () =>{
    //   here we have used fixed student id.
      const student_id = 111;
    const fetchMessage = await fetch("http://127.0.0.1:8000/adminsite/directmessage/",
    {
      method: 'GET',
      headers: {
       "Authorization": `Token ${localStorage.getItem('token')}`,
       "Content-Type": "application/json"
     },
    })
    const fetchmessagejson = await fetchMessage.json()
    const student_message_filter = fetchmessagejson.filter(msg => msg.student_admission_number == student_id)
    setMessageData(student_message_filter)
    console.log(messageData)
  }

  const fetch_teacher_detail = async() =>{
    const fetchDetail = await fetch("http://127.0.0.1:8000/adminsite/teacherregister/",
    {
      method: 'GET',
      headers: {
       "Authorization": `Token ${localStorage.getItem('token')}`,
       "Content-Type": "application/json"
     }, 
    })
    const fetchedteacherdetail = await fetchDetail.json()
    setTeacherDetail(fetchedteacherdetail)
    console.log(teacherDetail)
  }
  useEffect(() =>{
    fetch_message();
    fetch_teacher_detail();
  })
  return (
    <div>
      <div className="maincontent">
      <div className="container">
        <div className="row">
          <Table bordered>
            <thead>
              <tr>
                <th>From</th>
                <th>Message</th>
                {/* <th></th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
                messageData.map(message=>(
                    <tr>
                        {teacherDetail.map(teacher=>(
                            message.teacher_name == teacher.teacher_unique_id? <td>{teacher.teacher_user.first_name + " " + teacher.teacher_user.middle_name + " " + teacher.teacher_user.last_name}</td> : null
                        ))}
                        <td>{message.message}</td>
                        {/* <td><Link to={`${match.url}/delete-message/${message.id}`} className='col-sm'>
                      <FaTrash className='text-danger'/>
                    </Link></td> */}
                    <td>Reply</td>
                    </tr>
            ))
            }
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
