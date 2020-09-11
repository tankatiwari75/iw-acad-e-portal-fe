import React, { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaMinus, FaInfo } from 'react-icons/fa';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
} from 'reactstrap';

import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

function UpdateAttendance(props) {
    const [del, setDel] = useState(false);
    const [datas, setDatas] = useState({})
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const fetchedData = await fetch(`http://127.0.0.1:8000/teachers/update-attendance/${props.match.params.id}`);
        const jsonFetchedData = await fetchedData.json();
        console.log(jsonFetchedData);
        setDatas(jsonFetchedData);
        console.log(datas)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatas(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = () => {
        const fetchnoticepost = fetch(`http://127.0.0.1:8000/teachers/update-attendance/${props.match.params.id}/`,
            {
                method: 'PUT',
                body: JSON.stringify(datas),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(() => window.location = "/attendance-upload");
        // .then(redirection)

    }
    return (
        <div className="container container-fluid">
            <Form>
                <div className='row text-left'>
                    <FormGroup className="col-sm-6">
                        <Label for="id">ID</Label>
                        <Input
                            type="text"
                            name="id"
                            id="id"
                            defaultValue={datas.id}
                            disabled
                            placeholder="ID"
                            required />
                    </FormGroup>
                    <FormGroup className="col-sm-6">
                        <Label for="student_id">Student ID</Label>
                        <Input
                            type="text"
                            name="student_id"
                            id="student_id"
                            defaultValue={datas.student_id}
                            disabled
                            required
                        />
                    </FormGroup>
                    <FormGroup className="col-sm-6">
                        <Label for="notice-title">Teacher ID</Label>
                        <Input
                            type="text"
                            name="id"
                            id="id"
                            defaultValue={datas.teacher_id}
                            disabled
                            required />
                    </FormGroup>
                    <FormGroup className="col-sm-6">
                        <Label for="subject_name">Subject Name</Label>
                        <Input
                            type="text"
                            name="subject_name"
                            id="subject_name"
                            onChange={handleChange}
                            disabled
                            defaultValue={datas.subject_name}
                            required />
                    </FormGroup>
                    <FormGroup className="col-sm-6">
                        <Label for="class_present">Class Present</Label>
                        <Input
                            type="text"
                            name="class_present"
                            id="class_present"
                            defaultValue={datas.class_present}
                            onChange={handleChange}
                        />
                        </FormGroup>
                        <FormGroup className="col-sm-6">
                            <Label for="class_held">Class Held</Label>
                            <Input
                                type="text"
                                name="class_held"
                                id="class_held"
                                defaultValue={datas.class_held}
                                onChange={handleChange}
                            />
                        </FormGroup>
                </div>
                    <Button className="float-left" color="primary" onClick={handleSubmit}>Update</Button>
            </Form>
        </div>
    )
}

export default UpdateAttendance;
