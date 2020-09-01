
import React, {useEffect, useState} from 'react';

import {
    Redirect,

    Link
  } from "react-router-dom";


import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
 const RoleAssignTeacher = (props) => {
     const [data, setDatas] = useState(
         {
             "teacher_name": "",
             "class_number": "",
             "subject_name": "",
         }
     )

     console.log(data)
     const handleChange = (event)=> {
         const {name,value} = event.target;
         setDatas(
             prevState => ({
                 ...prevState,
                 [name]:value
             })
         )
     }
     const handleSubmit = ()=> {
         const datas = {
                "teacher_name":"",
                "class_number":"",
                "subject_name":"",
            }
             const fetchroleassignteacher = fetch ("http://127.0.0.1:8000/adminsite/roleforteacher/",
            {
                method: 'POST',
                body:JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json"
                 }
            })
            .then(res => res.json())
            .then(() => window.location="/manageteacher");
            // .then(redirection)

            console.log(datas)

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
                            onChange={handleChange}
                            placeholder="Enter first name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Name">Middle Name</Label>
                        <Input
                            type="text"
                            name="middlename"
                            id="middle_name"
                            onChange={handleChange}
                            placeholder="Enter Middle Name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Name">Last Name</Label>
                        <Input
                            type="text"
                            name="lastname"
                            id="last_name"
                            onChange={handleChange}

                            placeholder="Enter Last Name"/>
                    </FormGroup>
            <FormGroup onChange ={handleChange}>
            <Label for="SelectClassNumber">Class Number</Label>
            <Input type="select" name="ClassNumber" id="selectclassnumbere" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>

          </Input>
        </FormGroup>
           <FormGroup>
            <Label for="SelectSubjectName">Subject Name</Label>
            <Input type="select" name="SubjectName" id="selectsubjectname" multiple>
            <option>Maths</option>
            <option>Science</option>
            <option>Computer</option>
            <option>Nepali</option>
            <option>Social Studies</option>
            <option>English</option>
          </Input>
        </FormGroup>
           <Button  onClick={handleSubmit}>Submit</Button>
             </Form>
            </div>


        );

    };


export default RoleAssignTeacher;
