import React, { useState, useEffect } from 'react'
import { Table, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { FaPlus, FaTrash, FaMinus, FaRegEdit } from 'react-icons/fa';
import './TeacherAttendance.css';
import {
    Link
} from 'react-router-dom'

export default class TeacherAttendance extends React.Component {
    constructor(props) {
        super(props);

    // const fetchData = async () => {
    //     const fetchedData = await fetch("http://127.0.0.1:8000/teachers/10/1/Math/");
    //     const jsonFetchedData = await fetchedData.json();
    // //     console.log(jsonFetchedData);
    //     setstudents(jsonFetchedData);
        this.state = {
            class_number: 9,
            teacher_id: "102",
            subject_name: "English",
            classes: [],
            students: [],
            subjects: []

        };

        this.handleChangesubject = this.handleChangesubject.bind(this);
        this.handleChangeclass = this.handleChangeclass.bind(this);
        this.toggleButtonState = this.toggleButtonState.bind(this);
        this.fetchSubject = this.fetchSubject.bind(this);
    }

    // handleChange(event) {
    //     this.setState({
    //         subject_name: event.target.value

    //     })

    // }
    handleChangesubject = (event) => {
        this.setState({
            subject_name: event.target.value


        })
    }
    handleChangeclass = (eve) => {
        this.setState({
            class_number: eve.target.value,

        })
    }
    // handleSubmit(event) {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    // }
    componentDidMount() {
        let initialPlanets = [];
        fetch(`http://127.0.0.1:8000/teachers/getsubject/${this.state.teacher_id}`)
            .then(response => {
                return response.json();
            }).then(data => {
                initialPlanets = data.map((classnumber) => {

                    return classnumber
                });
                this.setState({
                    classes: initialPlanets,
                });
            });

    }
    fetchSubject = async () => {
        let inital = [];
        const fetchsubject = await fetch(`http://127.0.0.1:8000/teachers/getsubjestteacher/${this.state.teacher_id}/${this.state.class_number}/`)
            .then(response => {
                return response.json();
            }).then(data => {
                inital = data.map((clss) => {
                    return clss
                });
                this.setState({
                    subjects: inital
                });
            });

    }


    toggleButtonState = () => {
        let datas = [];
        const url = `http://127.0.0.1:8000/teachers/${this.state.teacher_id}/${this.state.subject_name}/`;
        fetch(url)
            .then(response => {
                return response.json();
            }).then(data => {
                datas = data.map((student) => {
                    return student
                });
                this.setState({
                    students: datas
                });
            });
    }
    render() {
        console.log(this.state.class_number)
        console.log(this.state.subject_name)
        console.log(this.state.subjects)
        console.log(this.state.teacher_id)

        return (
            <div className="main">
                <div className="container">
                    <div className="row">
                        <select className="select" value={this.state.class_number} onChange={this.handleChangeclass} >
                            {this.state.classes.map((classnumber) => (
                                <option value={classnumber.class_number}>
                                    {classnumber.class_number}
                                </option>
                            ))}
                        </select>
                        <button onClick={this.fetchSubject}>Get subjects</button>
                        <select className="select" value={this.state.subject_name} onChange={this.handleChangesubject} >
                            {this.state.subjects.map((classnumber) => (
                                <option value={classnumber.subject_name}>
                                    {classnumber.subject_name}
                                </option>
                            ))}
                        </select>
                        <button onClick={this.toggleButtonState}>Get students</button>
                    </div>
                </div>
                <div>
                    <Link to={`${this.props.match.url}/add-newstudent-attendance/${this.state.teacher_id}/${this.state.class_number}/${this.state.subject_name}`}>
                        <Button color='primary'>Add New Student &nbsp;
                    <FaPlus className='text-light' /></Button>
                    </Link>
                </div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Teacher ID</th>
                            <th>Subject Name</th>
                            <th>Class Present</th>
                            <th>Class Held</th>
                            <th>Update Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map(student => (
                            <tr>
                                <td>{student.student_id}</td>
                                <td>{student.teacher_id}</td>
                                <td>{student.subject_name}</td>
                                <td>{student.class_present}</td>
                                <td>{student.class_held}</td>
                                <td>
                                    <Link to={`${this.props.match.url}/update-attendance/${student.id}/`}>
                                        <Button>Update &nbsp;</Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
