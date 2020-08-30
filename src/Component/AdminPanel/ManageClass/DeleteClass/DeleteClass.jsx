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

const DeleteClass = ({match}) => {
    const [del, setDel] = useState(false);
     const [datas, setDatas] = useState({
    
        "class_number": "",
        
     })

    const deleteClassFunction = async() =>{
       const fetchdeletedata = await fetch(`http://127.0.0.1:8000/adminsite/addsubject/${match.params.id}`,{method: 'DELETE'})
       .then(() => window.location="/manageclass"); 
    //    setDel = true
    }
    useEffect(() => {
        deleteClassFunction();
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
                "class_number": "",
            }
            // const redirection = (<Redirect to="/managestudents" />)
            const fetchstudentpost = fetch ("http://127.0.0.1:8000/adminsite/deleteclass/", 
            {
                method: 'DELETE', 
                body:JSON.stringify(datas), 
                headers:{ 
                    "Content-Type": "application/json"
                 }
            })
            .then(res => res.json())
            .then(() => window.location="/manageclass");
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
            <Label for="exampleEmail">Class Number</Label>
            <Input
              type="number"
              name="class_number"
              id="class_number"
              onChange={handleChange}
              placeholder="Class Number"/>
          </FormGroup>
          </div>
        <Button className="float-left" color="primary" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
       
    );
};

export default DeleteClass;