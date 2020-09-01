

import {FaPlus } from 'react-icons/fa';
//
import React, {useEffect, useState} from 'react';

// import "./manageteacher.css"
//react-router-dom
import {
    Link,
    Redirect,
  } from "react-router-dom";


import {

} from "reactstrap"


import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
    Table,
  FormText
} from 'reactstrap';

    const AddTeacher = (props) => {
        const [data,setDatas] = useState(
            {
                "teacher_name": "",
                "email":"",
                "phone_number":"",
                "qualification":"",
                "profile_picture":"",

            }
        )
console.log(data)
    const handleChange = (event) => {

             const {name,value} = event.target;
         setDatas(
             prevState => ({
                 ...prevState,
                 [name]:value
             })
         )
    }
const handleSubmit = () => {
    const datas = {
        "teacher_name": "",
        "email": "",
        "phone_number": "",
        "qualification": "",
        "profile_picture" :"",
    }
    const fetchteacherpost =
        fetch("http://127.0.0.1:8000/adminsite/teacherregister/",
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => window.location = "/manageteacher");
    // .then(redirection)

    console.log(datas)
}

        // const TeacherPostApi = () => {
        //     console.log("Teacher Added")
        // }
        //
        //
        // console.log("this props", props.location.aboutProps)
        return (
            <div className="maincontent">
                <div className="container">
                    <div className="row">
                        <Link to='add-teacher'>
                            <Button color='primary'>Add Teacher &nbsp;
                                <FaPlus className='text-light'/></Button>
                        </Link>
                    </div>
                </div>

                <Form>
                    <FormGroup>
                        <Label for="Name">First Name</Label>
                        <Input
                            type="text"
                            name="firstname"
                            id="firstname"
                            onChange ={handleChange}
                            placeholder="Enter first name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Name">Middle Name</Label>
                        <Input
                            type="text"
                            name="middlename"
                            id="middlename"
                            onChange={handleChange}
                            placeholder="Enter Middle Name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Name">Last Name</Label>
                        <Input
                            type="text"
                            name="lastname"
                            id="last_name"
                            onChange = {handleChange}
                            placeholder="Enter Last Name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            onChange = {handleChange}
                            placeholder="Enter your Email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Phone Number</Label>
                        <Input
                            type="number"
                            name="number"
                            id="phone_number"
                            onChange = {handleChange}
                            placeholder="enter your Phone Number"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            onChange = {handleChange}
                            placeholder=" Enter your password "/>
                    </FormGroup>
                    <FormGroup onChange ={handleChange}>
                        <Label for="exampleText">Qualifications</Label>
                        <Input type="textarea" name="text" id="qualification"/>
                    </FormGroup>
                    <FormGroup onChange ={handleChange}>
                        <Label for="exampleFile">Profile Picture</Label>
                        <Input type="file" name="file" id="profile_picture"/>
                    </FormGroup>

                    <Button  color="primary" onClick={handleSubmit}>Submit</Button>
                </Form>
            </div>

        );
    };


export default AddTeacher;