import React, {useEffect, useState} from 'react';
import {
    Table
} from "reactstrap"

const TeacherDetail = ({match}) => {
  useEffect(() => {
    fetchData();
  })

  const [teacher,
    setTeacher] = useState([]);

  const fetchData = async() => {
    const fetchedData = await fetch(`http://127.0.0.1:8000/adminsite/teacherregister/${match.params.id}`);
    const jsonFetchedData = await fetchedData.json();
    // console.log(jsonFetchedData);
    setTeacher(jsonFetchedData);
    console.log(teacher)
  }

  return (
   <div className="container container-fluid">
       <div>
           {/* image section */}
       </div>
       <Table striped>
           <tbody className="text-left">
               <tr>
                   <td>Name:</td>
                   <td>{teacher.first_name + "  " + teacher.middle_name + " " + teacher.last_name}</td>
               </tr>
               <tr>
                   <td>Email:</td>
                   <td>{teacher.email}</td>
               </tr>
               <tr>
                   <td>Phone Number:</td>
                   <td>{teacher.phonenumber}</td>
               </tr>
               <tr>
                   <td>Qualification</td>
                   <td>{teacher.qualification}</td>
               </tr>
           </tbody>
       </Table>
   </div>
  );
};

export default TeacherDetail;