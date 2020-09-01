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

const AddClass = (props) => {
    const [datas, setDatas] = useState({ 

        "class_number": "",
        
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
        const data = {
                "class_number": "",
               
            }
            // const redirection = (<Redirect to="/managestudents" />)
            const fetchsubjectpost = fetch ("http://127.0.0.1:8000/adminsite/addclass/", 
            {
                method: 'GET', 
                headers: { 
                    "Content-Type": "application/json"
                } 
            })
            .then(res => res.json())
            .then(() => window.location="/manageclass");
            // .then(redirection)
                      
            console.log(data) 
}

return (
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
        
}


export default AddClass;