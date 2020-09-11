import React, {useState, useEffect} from 'react'

function TeacherAttendance() {
    const [sutdents, setstudents]=useState([])
    let sn = 1;

    const fetchData = async () => {
        const fetchedData = await fetch("http://127.0.0.1:8000/teachers/10/1/Math/");
        const jsonFetchedData = await fetchedData.json();
        console.log(jsonFetchedData);
        setstudents(jsonFetchedData);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {sutdents.map(student=>(
                <table>
                    <thead>
                        <tr>ID</tr>
                        <tr>Teacher ID</tr>
                        <tr>Student ID</tr>
                        <tr>Subject ID</tr>
                        <tr>Class Held</tr>
                        <tr>Class Present</tr>
                    </thead>
                </table>
            ))}
        </div>
    )
}

export default TeacherAttendance
