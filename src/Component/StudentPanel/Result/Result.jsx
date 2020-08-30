import React, { useState, useEffect } from 'react';
import Text from 'react';
import './result.css'
import {
    Table
} from 'reactstrap';
const Result = (props) => {
    const student_id = 21;
    const result_obtained = "";
    const [sutdents, setstudents] = useState([])

    const fetchData = async () => {
        const fetchedData = await fetch(`http://127.0.0.1:8000/teachers/result/${student_id}`);
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
                            <th>Class Number</th>
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
                                <td>{student.class_number}</td>
                                <td>{student.teacher_name}</td>
                                <td>{student.subject_name}</td>
                                <td>{student.marks}</td>
                                <td>{student.pass_status}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Result;