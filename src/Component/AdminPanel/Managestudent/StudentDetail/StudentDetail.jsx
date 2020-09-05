import React, {useEffect, useState} from 'react';
import {
    Table
} from "reactstrap"
const data = {}

const StudentDetail = ({match}) => {
  useEffect(() => {
    fetchData();
  })

  const [student,
    setStudent] = useState([]);

  const fetchData = async() => {
    const fetchedData = await fetch(`http://127.0.0.1:8000/adminsite/studentregister/${match.params.id}`,
    {
        method: "GET",
        headers: {
          "Authorization": `Token d75980bc78c52c2a5e21e440eed92cefbc713699`,
          "Content-Type": "application/json"
        }
      }
    );
    const jsonFetchedData = await fetchedData.json();
    // console.log(jsonFetchedData);
    setStudent(jsonFetchedData);
    // console.log(student)
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
                   <td>{student.first_name + "  " + student.middle_name + " " + student.last_name}</td>
               </tr>
               <tr>
                   <td>Username:</td>
                   <td>{student.first_name}</td>
               </tr>
               <tr>
                   <td>Email:</td>
                   <td>{student.email}</td>
               </tr>
               <tr>
                   <td>Address:</td>
                   <td>{student.address}</td>
               </tr>
               <tr>
                   <td>Class:</td>
                   <td>{student.class_number}</td>
               </tr>
               <tr>
                   <td>Contact Number:</td>
                   <td>{student.parents_number}</td>
               </tr>
               <tr>
                   <td>Admission Number:</td>
                   <td>{student.admission_number}</td>
               </tr>
               <tr>
                   <td>Gender:</td>
                   <td>{student.gender == 'M' ? "Male"  : "Female"}</td>
               </tr>
               <tr>
                   <td>Date of Birth:</td>
                   <td>{student.date_of_birth}</td>
               </tr>
           </tbody>
       </Table>
   </div>
  );
};

export default StudentDetail;