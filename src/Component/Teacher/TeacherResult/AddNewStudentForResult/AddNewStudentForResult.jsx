import React from 'react'

import { useState, useEffect } from 'react';

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';

export default function AddNewStudentForResult(props) {
    const [datas, setDatas] = useState({
        "student_id": "",
        "teacher_name":  props.match.params.teacher_id,
        "subject_name":  props.match.params.subject_name,
        "class_number":props.match.params.class_number,
        "marks":"",
        "pass_status":true
        
        
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatas(prevState => ({
            ...prevState,
            [name]: value
        }))  
    }

    const handleSubmit = () => {
        const daat = {
            "student_id": "",
            "teacher_id": "",
            "subject_name": "",
            "marks":"",
            "pass_status":"",
            "class_number":"10"
            }
            // const redirection = (<Redirect to="/managenotice" />)
            const fetchnoticepost = fetch ("http://127.0.0.1:8000/teachers/resultuploads/", 
            {
                method: 'POST', 
                body:JSON.stringify(datas), 
                headers:{ 
                    "Content-Type": "application/json"
                 }
            })
            .then(res => res.json())
            //.then(() => window.location="/attendance-upload");
            // .then(redirection)
                      
            console.log(daat)
            
    }
    return (

        <div className="container container-fluid">
            <Form>
                <div className='row text-left'>
                    <FormGroup className="col-sm-6">
                        <Label for="notice-title">Student ID</Label>
                        <Input
                            type="text"
                            name="student_id"
                            id="student_id"
                            onChange={handleChange}
                           
                            required />
                    </FormGroup>
                </div>
                <div className='row text-left'>
                    <FormGroup className="col-sm-6">
                        <Label for="notice-description">Mark Obtained</Label>
                        <Input
                            type="text"
                            name="marks"
                            id="marks"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </div>
                <Button className="float-left" color="primary" onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
}
