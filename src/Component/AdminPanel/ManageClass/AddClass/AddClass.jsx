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
            // const redirection = (<Redirect to="/managestudents" />)
            const fetchsubjectpost = fetch ("https://e-portal-application.herokuapp.com/adminsite/add-classnumber/", 
            {
                method: 'POST', 
                body:JSON.stringify(datas), 
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem('token')}`

                },
            })
            // .then(res => res.json())
            .then(() => window.location="/manageclassroom");
            // .then(redirection)
                      
            console.log(datas) 
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