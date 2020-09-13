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

const AddSubject = (props) => {
    const [datas, setDatas] = useState({
        "class_number": "",
        "subject_name": "",
        "subject_syllabus": null
    })

    // console.log(datas)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatas(prevState => ({
            ...prevState,
            [name]: value
        }))  
    }

    const handleSubmit = () => {
      const datta = {
        "class_number": "2",
        "subject_name": "dell",
        "subject_syllabus": null

      }
        console.log(datta)
            const fetchsubjectpost = fetch ("https://e-portal-application.herokuapp.com/adminsite/subjectregister/", 
            {
                method: 'POST', 
                body:JSON.stringify(datta), 
                headers:{ 
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem('token')}`

                 }
            })
            .then(res => res.json())
            // .then(() => window.location="/managesubject");
}


return (
    <div className="container container-fluid">
      <Form> 
        <div className='row text-left'>
          <FormGroup className="col-sm-4">
          <Label for="exampleEmail">Class Number</Label>
          <Input type="select"
             name="class_number"
             id="class_number"
             onChange={handleChange}>
                  <option>Select Classroom</option>
                  <option value="1">1</option>
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
            {/* <Input
              type="text"
              name="class_name"
              id="class_name"
              onChange={handleChange}
              placeholder="Class Name"/> */}
          </FormGroup>
          
          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Subject Name</Label>
            <Input
              type="text"
              name="subject_name"
              id="subject_name"
              onChange={handleChange}
              placeholder="Subject Name"/>
          </FormGroup>
       
          <FormGroup className="col-sm-4" onChange={handleChange}>
          
            <Label for="exampleEmail">Subject Syllabus</Label>
            <Input
              type="file"
              name="subject_syllabus"
              id="subject_syllabus"
              />
          </FormGroup>
        </div>
        <Button className="float-left" color="primary" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddSubject;