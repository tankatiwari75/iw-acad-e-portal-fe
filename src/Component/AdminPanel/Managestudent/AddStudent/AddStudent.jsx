import React , { useState, useEffect } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import { Redirect } from 'react-router-dom';

const AddStudent = (props) => {
    const [datas, setDatas] = useState({

        "profile_picture": null,
        "first_name": "",
        "middle_name": "",
        "last_name": "",
        "email": "",
        "admission_number": 1,
        "age": 21,
        "gender": "",
        "parents_number": "",
        "date_of_birth": "",
        "address": "",
        "password": "",
        "class_number": ""
        

    })

    console.log(datas)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatas(prevState => ({
            ...prevState,
            [name]: value
        }))  
    }

    const handleSubmit = () => {
        const daat = {
                "profile_picture": null,
                "first_name": "a",
                "middle_name": "",
                "last_name": "s",
                "email": "aa@gmail.com",
                "admission_number": 1,
                "age": 21,
                "gender": "M",
                "parents_number": "2334567894",
                "date_of_birth": "2010-10-10",
                "address": "chobhar, kirtipur, Kathmandu",
                "password": "helloworld",
                "class_number": "10"
            }
            // const redirection = (<Redirect to="/managestudents" />)
            const fetchstudentpost = fetch ("http://127.0.0.1:8000/adminsite/studentregister/", 
            {
                method: 'POST', 
                body:JSON.stringify(datas), 
                headers:{ 
                    "Content-Type": "application/json"
                 }
            })
            .then(res => res.json())
            .then(() => window.location="/managestudent");
            // .then(redirection)
                      
            console.log(daat)
            
    }


  return (
    <div className="container container-fluid">
      <Form>
        <div className='row text-left'>
          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">First Name</Label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              onChange={handleChange}
              placeholder="First Name"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Middle Name</Label>
            <Input
              type="text"
              name="middle_name"
              id="middle_name"
              onChange={handleChange}
              placeholder="Middle Name"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Last Name</Label>
            <Input
              type="text"
              name="last_name"
              id="last_name"
              onChange={handleChange}
              placeholder="
              Last Name"/>
          </FormGroup>
        </div>
      {/* second line */}
        <div className='row text-left'>
          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
              placeholder="Address"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Date of Birth</Label>
            <Input
              type="date"
              name="date_of_birth"
              id="date_of_birth"
              onChange={handleChange}
              placeholder="
              Date of Birth"/>
          </FormGroup>
        </div>
        {/* third line */}

        <div className='row text-left'>
          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Admission Number</Label>
            <Input
              type="number"
              name="admission_number"
              id="admission_number"
              onChange={handleChange}
              placeholder="Admission Number"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Parents Number</Label>
            <Input
              type="text"
              name="parents_number"
              id="parents_number"
              onChange={handleChange}
              placeholder="Parents Number"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
          <Label for="exampleEmail">Class Number</Label>
            <Input
              type="number"
              name="class_number"
              id="class_number"
              onChange={handleChange}
              placeholder="Class Number"/>

          </FormGroup>
        </div>
        {/* fourth line */}
        <div className='row text-left'>
          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Password"/>
          </FormGroup>

          <FormGroup tag="fieldset" className="col-sm-4">
        <legend>Gender</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio"  onChange={handleChange} name="gender" value="M" />{'Male'}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio"  onChange={handleChange} name="gender" value = "F" />{'Female'}
          </Label>
        </FormGroup>
      </FormGroup>
{/* radio buttons */}
       
          <FormGroup className="col-sm-4" onChange={handleChange}>
          
            <Label for="exampleEmail">Upload Picture</Label>
            <Input
              type="file"
              name="profile_picture"
              id="profile_picture"
              />
          </FormGroup>
        </div>
        <Button className="float-left" color="primary" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddStudent;