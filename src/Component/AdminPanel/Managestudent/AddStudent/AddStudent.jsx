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
  // console.log(localStorage.getItem('token'))
  const [daata, setDaata] = useState({})
  const [studentData, setStudentData] = useState({
          "username": "",
          "first_name": "",
          "middle_name": "",
          "last_name": "",
          "email": "",
          "password": ""
  })
    const [datas, setDatas] = useState({
      // "student_user": {
      //     // "username": "",
      //     // "first_name": "",
      //     // "middle_name": "",
      //     // "last_name": "",
      //     // "email": "",
      //     // "password": ""
      // },
      "profile_picture": null,
      "admission_number": null,
      "class_number": null,
      "age": null,
      "gender": null,
      "parents_number": "",
      "date_of_birth": null,
      "address": ""
  })

    // console.log(datas)
    const handleChange = (event) => {
      const { name, value } = event.target;
      if (name == "username" || name =="first_name" || name =="last_name" || name=="middle_name" || name =="email" || name=="password"){
        setStudentData(prevState => ({
          ...prevState,
          [name]: value
        }))
        // console.log(studentData) 
      }
      else{
        setDatas(prevState => ({
          ...prevState,
          [name]: value
      }))  
      // console.log(datas) 
      }  
       
        
    }

    const handleSubmit = () => {
        const daat = {
          "student_user": {
            "username": "stu." + studentData['username'],
            "first_name": studentData['first_name'],
            "middle_name": studentData['middle_name'],
            "last_name": studentData['last_name'],
            "email": studentData['email'],
            "password": studentData['password']
        },
        "profile_picture": datas['profile_picture'],
        "admission_number": datas['admission_number'],
        "class_number": datas['class_number'],
          "age": datas['age'],
        "gender": datas['gender'],
        "parents_number": datas['parents_number'],
        "date_of_birth": datas['date_of_birth'],
        "address": datas['address']
            }
            console.log(daat)
            // const redirection = (<Redirect to="/managestudents" />)
            const fetchstudentpost = fetch("https://e-portal-application.herokuapp.com/adminsite/studentregister/", 
      
            {
              method: 'POST',
              headers: {
               "Authorization": `Token ${localStorage.getItem('token')}`,
               "Content-Type": "application/json"
             },
             body:JSON.stringify(daat), 
           }).then(function(response){
             if (response.ok){
              window.location="/managestudent";
             }
             else{
                alert("Please Check details\n Username, Email, Admission Number Should be unique\n Fill all details carefully.");
             }
           })
    }


  return (
    <div className="container container-fluid">
      <Form>
        <div className='row text-left'>
          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">First Name</Label>
            <Input required
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
            <Input required
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
        <FormGroup className="col-sm-12">
            <Label for="exampleEmail">Username</Label>
            <Input required
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              placeholder="Username Should be unique"/>
          </FormGroup>
          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Email</Label>
            <Input required
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Address</Label>
            <Input required
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
              placeholder="Address"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Date of Birth</Label>
            <Input required
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
            <Input required
              type="number"
              name="admission_number"
              id="admission_number"
              onChange={handleChange}
              placeholder="Admission Number"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Parents Number</Label>
            <Input required
              type="text"
              name="parents_number"
              id="parents_number"
              onChange={handleChange}
              placeholder="Parents Number"/>
          </FormGroup>

          <FormGroup className="col-sm-4">
          <Label for="exampleEmail">Class Number</Label>
            {/* <Input required
              type="number"
              name="class_number"
              id="class_number"
              onChange={handleChange}
              placeholder="Class Number"/> */}
              <Input required type="select"
              name="class_number"
              id="class_number"
              onChange={handleChange}
              placeholder="Enter Class Room"
              >
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
        </Input>

          </FormGroup>
        </div>
        {/* fourth line */}
        <div className='row text-left'>
        <FormGroup className="col-sm-4">
            <Label for="password">Password</Label>
            <Input required
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Password"/>
          </FormGroup>
          <FormGroup className="col-sm-4">
            <Label for="age">Age</Label>
            <Input required
              type="number"
              name="age"
              id="age"
              onChange={handleChange}
              placeholder="Password"/>
          </FormGroup>

          <FormGroup tag="fieldset" className="col-sm-4">
        <legend>Gender</legend>
        <FormGroup check>
          <Label check>
            <Input required type="radio"  onChange={handleChange} name="gender" value="M" />{'Male'}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input required type="radio"  onChange={handleChange} name="gender" value = "F" />{'Female'}
          </Label>
        </FormGroup>
      </FormGroup>
{/* radio buttons */}
       
          {/* <FormGroup className="col-sm-4" onChange={handleChange}>
          
            <Label for="exampleEmail">Upload Picture</Label>
            <Input
              type="file"
              name="profile_picture"
              id="profile_picture"
              />
          </FormGroup> */}
        </div>
        <Button type="submit" className="float-left" color="primary" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddStudent;