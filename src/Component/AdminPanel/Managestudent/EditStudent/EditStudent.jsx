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


export default function EditStudent({match}) {
    const matched_id = match.params.id
    const [data, setData] = useState({
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

useEffect(() =>{
    fetchDataOfStudentWithId();
},[])

const fetchDataOfStudentWithId = async () => {
    const fetchData = await fetch(`http://127.0.0.1:8000/adminsite/studentregister/${matched_id}`)
    const fetchedData = await fetchData.json()
    setData(fetchedData)
}

const handleChange = (event) =>{
    const { name, value } = event.target;
    setData(prevState => ({
        ...prevState,
        [name]: value
    }))  
    console.log(data['first_name'])
}

const handleSubmit = () =>{
    const fetchstudentpost = fetch(`http://127.0.0.1:8000/adminsite/studentregister/${matched_id}`, 
            {
                method: 'PUT', 
                body:JSON.stringify(data), 
                headers:{ 
                    "Content-Type": "application/json"
                 }
            })
            .then(res => res.json())
            
            // .then(() => window.location="/managestudent");
    console.log(data)
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
                  defaultValue={data['first_name']}
                  onChange={handleChange}
                  placeholder="First Name"/>
              </FormGroup>
    
              <FormGroup className="col-sm-4">
                <Label for="exampleEmail">Middle Name</Label>
                <Input
                  type="text"
                  name="middle_name"
                  id="middle_name"
                  defaultValue={data['middle_name']}
                  onChange={handleChange}
                  placeholder="Middle Name"/>
              </FormGroup>
    
              <FormGroup className="col-sm-4">
                <Label for="exampleEmail">Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  defaultValue={data['last_name']}
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
                disabled
                  type="email"
                  name="email"
                  defaultValue={data['email']}
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
                  defaultValue={data['address']}
                  onChange={handleChange}
                  placeholder="Address"/>
              </FormGroup>
    
              <FormGroup className="col-sm-4">
                <Label for="exampleEmail">Date of Birth</Label>
                <Input
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                  defaultValue={data['date_of_birth']}
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
                  defaultValue={data['admission_number']}
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
                  defaultValue={data['parents_number']}
                  onChange={handleChange}
                  placeholder="Parents Number"/>
              </FormGroup>
    
              <FormGroup className="col-sm-4">
              <Label for="exampleEmail">Class Number</Label>
                <Input
                    defaultValue={data['class_number']}
                  type="number"
                  name="class_number"
                  id="class_number"
                  onChange={handleChange}
                  placeholder="Class Number"/>
    
              </FormGroup>
            </div>
            {/* fourth line */}
            <div className='row text-left'>
              {/* <FormGroup className="col-sm-4">
                <Label for="exampleEmail">Password</Label>
                <Input
                  type="password"
                  name="password"

                  id="password"
                  onChange={handleChange}
                  placeholder="Password"/>
              </FormGroup> */}
    
              <FormGroup tag="fieldset" className="col-sm-4">
            <legend>Gender</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" defaultChecked={data['gender']} onChange={handleChange} name="gender" value="M" />{'Male'}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" defaultChecked={data['gender']}  onChange={handleChange} name="gender" value = "F" />{'Female'}
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
            <Button className="float-left" color="primary" onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>
      );
}
