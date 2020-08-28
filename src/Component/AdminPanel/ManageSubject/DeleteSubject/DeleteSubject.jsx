import React, { useEffect, useState } from 'react';
import {FaPlus, FaEdit, FaTrash, FaMinus, FaInfo} from 'react-icons/fa';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
  } from 'reactstrap';

import {Link} from "react-router-dom";
import { Redirect } from 'react-router-dom';

const DeleteSubject = ({match}) => {
    const [del, setDel] = useState(false);
     const [datas, setDatas] = useState({
    
        "class_name": "",
        "subject_name": "",
        "subject_syllabus": "null"
        
     })

    const deleteSubjectFunction = async() =>{
       const fetchdeletedata = await fetch(`http://127.0.0.1:8000/adminsite/addsubject/${match.params.id}`,{method: 'EDIT'})
       .then(() => window.location="/managesubject");
    //    setDel = true
    }
    useEffect(() => {
        deleteSubjectFunction();
      }, [])

    // const checkDel = () => del ? <Redirect to = "/managesubject" /> : <h1>Data not edited</h1>


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
                "class_name": "",
                "subject_name": "",
                "subject_syllabus": "null"
            }
            // const redirection = (<Redirect to="/managestudents" />)
            const fetchstudentpost = fetch ("http://127.0.0.1:8000/adminsite/addsubject/", 
            {
                method: 'PUT', 
                body:JSON.stringify(datas), 
                headers:{ 
                    "Content-Type": "application/json"
                 }
            })
            .then(res => res.json())
            .then(() => window.location="/managesubject");
            // .then(redirection)
                      
            console.log(data)
}

    return (
        // checkDel
        // <Redirect to="/managesubject" />
        <div className="container container-fluid">
            
      <Form> 
        <div className='row text-left'>
          <FormGroup className="col-sm-4">
            <Label for="exampleEmail">Class Name</Label>
            <Input
              type="text"
              name="class_name"
              id="class_name"
              onChange={handleChange}
              placeholder="Class Name"/>
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

export default DeleteSubject;