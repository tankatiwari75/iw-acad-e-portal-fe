import React, { useState, useEffect } from 'react';
import './attendance.css'
import {
    Table
} from 'reactstrap';
const Attendance = (props) => {
    const student_id= 21;
    const [sutdents, setstudents] = useState([])

    const fetchData = async () => {
        const fetchedData = await fetch(`http://127.0.0.1:8000/teachers/attendance/${student_id}`);
        const jsonFetchedData = await fetchedData.json();
        // console.log(jsonFetchedData);
        setstudents(jsonFetchedData);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="container">
        <div className="table">
            <Table bordered>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Teacher ID</th>
                        <th>Subject Name</th>
                        <th>Marks Obtained</th>
                        <th>Result Status</th>
                    </tr>
                </thead>
                <tbody>
                {sutdents.map(student => (
                    <tr>
                        <td>{student.student_id}</td>
                        <td>{student.teacher_id}</td>
                        <td>{student.subject_name}</td>
                        <td>{student.class_present}</td>
                        <td>{student.class_held}</td>
                    </tr>
                    ))}
                </tbody>
           </Table>     
        </div>
        </div>
    );
};

export default Attendance;