import React, {useState, useEffect} from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

const AddTeacher = (props) => {
  // const [data]

  const [user, setUser] = useState({
          "username": "",
          "first_name": "",
          "middle_name": "",
          "last_name": "",
          "email": "",
          "password": ""
  });
  const [data, setData] = useState({
    "profile_picture": null,
    "teacher_unique_id": null,
    "phone_no": "",
    "qualifications": ""
  })

 
  const handleChange = (event) => {
    const { name, value } = event.target;
      if (name == "username" || name =="first_name" || name =="last_name" || name=="middle_name" || name =="email" || name=="password"){
        setUser(prevState => ({
          ...prevState,
          [name]: value
        }))
        // console.log(studentData) 
      }
      else{
        setData(prevState => ({
          ...prevState,
          [name]: value
      }))
      }
    console.log()
  }

  const handleSubmit = (event) =>{
    const teacher_data = {
      "teacher_user": {
          "username": "tea." + user['username'],
          "first_name":  user['first_name'],
          "middle_name": user['middle_name'],
          "last_name":   user['last_name'],
          "email":       user['email'],
          "password":    user['password']
      },
      "profile_picture": data['profile_picture'],
      "teacher_unique_id": data['teacher_unique_id'],
      "phone_no": data['phone_no'],
      "qualifications": data['qualifications']

    }
    console.log(teacher_data)
    const fetchstudentpost = fetch("http://127.0.0.1:8000/adminsite/teacherregister/", 
      
            {
              method: 'POST',
              headers: {
               "Authorization": `Token ${localStorage.getItem('token')}`,
               "Content-Type": "application/json"
             },
             body:JSON.stringify(teacher_data), 
           }).then(function(response){
            if (response.ok){
             window.location="/manageteacher";
            }
            else{
               alert("Please Check details\n Username, Email, Teacher Unique Id Should be unique\n Fill all details carefully.");
            }
          })
  }

  // console.log("this props", props.location.aboutProps)
  return (
    <div className="container container-fluid">
      <Form>
        <FormGroup>
          <Label for="Name">First Name</Label>
          <Input required
            type="text"
            name="first_name"
            id="exampleEmail"
            onChange={handleChange}
            placeholder="Enter first name"/>
        </FormGroup>
        <FormGroup>
          <Label for="Name">Middle Name</Label>
          <Input required
            type="text"
            onChange={handleChange}
            name="middle_name"
            id="exampleEmail"
            placeholder="Enter Middle Name"/>
        </FormGroup>
        <FormGroup>
          <Label for="Name">Last Name</Label>
          <Input required
            onChange={handleChange}
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Enter Last Name"/>
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input required
            type="text"
            onChange={handleChange}
            name="username"
            id="username"
            placeholder="Username should be unique"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input required
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
            placeholder="Enter your Email. Email should be unique"
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Teacher Unique Id</Label>
          <Input required
            type="number"
            onChange={handleChange}
            name="teacher_unique_id"
            id="teacher_unique_id"
            placeholder="teacher_unique_id"
            />
            </FormGroup>
            <FormGroup>
          <Label for="exampleEmail">Phone Number</Label>
          <Input required
            type="number"
            onChange={handleChange}
            name="phone_no"
            id="phone_no"
            placeholder="Phone  Number"
            />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input required
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder=" Enter your password "/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Qualifications</Label>
          <Input required type="textarea" onChange={handleChange} name="qualifications" id="exampleText"/>
        </FormGroup>
       

        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddTeacher;