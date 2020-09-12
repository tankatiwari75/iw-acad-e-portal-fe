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

        "class_name": "",
        "subject_name": "",
        "subject_syllabus": null
        
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
            const fetchsubjectpost = fetch ("http://127.0.0.1:8000/adminsite/subjectregister/", 
            {
                method: 'POST', 
                body:JSON.stringify(datas), 
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
          <Label for="exampleEmail">Class Name</Label>
          <Input type="select"
             name="class_name"
             id="class_name"
             onChange={handleChange} id="exampleSelect">
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