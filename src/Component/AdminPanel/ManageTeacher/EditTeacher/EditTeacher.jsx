import React, { useEffect, useState } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
  } from 'reactstrap';

import { Link,Redirect } from 'react-router-dom';


const EditTeacher = ({match}) => {
    const [del, setDel] = useState(false);
     const [datas, setDatas] = useState({

        "teacher_name": "",
        "email": "",
        "phonenumber": "",
         "qualification":""

     })
    const editTeacherFunction = async() =>{
       const fetchdeletedata = await fetch(`http://127.0.0.1:8000/adminsite/teacherregister${match.params.id}`,{method: 'PUT'})
       .then(() => window.location="/manageteacher");
    //    setDel = true
    }
    useEffect(() => {
        editTeacherFunction();
      }, [])
     console.log(datas)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatas(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        const data = {
            "teacher_name": "",
            "email": "",
            "phonenumber": "",
            "qualification": ""
        }
        const fetchteacherpost = fetch("http://127.0.0.1:8000/adminsite/teacherregister/",
            {
                method: 'PUT',
                body: JSON.stringify(datas),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(() => window.location = "/manageteacher");
        // .then(redirection)

        console.log(data)
    }

          return (
            <div className="maincontent">

                <Form>
                    <FormGroup>
                        <Label for="Name">First Name</Label>
                        <Input
                            type="text"
                            name="firstname"
                            id="first_name"
                            placeholder="Enter first name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Name">Middle Name</Label>
                        <Input
                            type="text"
                            name="middlename"
                            id="middle_name"
                            placeholder="Enter Middle Name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Name">Last Name</Label>
                        <Input
                            type="text"
                            name="lastname"
                            id="last_name"
                            placeholder="Enter Last Name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="Enter your Email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Phone Number</Label>
                        <Input
                            type="number"
                            name="number"
                            id="phone_number"
                            placeholder="enter your Phone Number"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder=" Enter your password "/>
                    </FormGroup>
                    <FormGroup >
                        <Label for="exampleText">Qualifications</Label>
                        <Input type="textarea" name="text" id="exampleText"/>
                    </FormGroup>
                    <FormGroup >
                        <Label for="exampleFile">Profile Picture</Label>
                        <Input type="file" name="file" id="ProfilePictureFile"/>
                    </FormGroup>

                    <Button >Submit</Button>
                </Form>
            </div>

        );
    };
 export default EditTeacher;
