import React, {useEffect, useState} from 'react';
import {
    Table
} from "reactstrap"

const SubjectDetail = ({match}) => {
  useEffect(() => {
    fetchData();
  })

  const [subject,
    setSubject] = useState([]);

  const fetchData = async() => {
    const fetchedData = await fetch(`http://127.0.0.1:8000/adminsite/addsubject/${match.params.id}`);
    const jsonFetchedData = await fetchedData.json();
    // console.log(jsonFetchedData);
    setSubject(jsonFetchedData);
    console.log(subject)
  }

  return (
   <div className="container container-fluid">
       <div>
           {/* image section */}
       </div>
       <Table striped>
           <tbody className="text-left">
               <tr>
                   <td>Class Name:</td>
                   <td>{subject.className}</td>
               </tr>
               <tr>
                   <td>Subject Name:</td>
                   <td>{subject.subjectName}</td>
               </tr>
               <tr>
                   <td>Subject Syllabus:</td>
                   <td>{subject.syllabus}</td>
               </tr>
               
           </tbody>
       </Table>
   </div>
  );
};

export default SubjectDetail;