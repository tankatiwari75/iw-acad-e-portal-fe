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

const UpdateNotice=({match})=> {
    const [del, setDel] = useState(false);
    const [datas, setDatas] = useState({
        "notice_title": "",
        "notice_description": "",
        "created_by": "tanka",
    })

    const editNoticeFunction = async() =>{
        const fetchdeletedata = await fetch(`http://127.0.0.1:8000/adminsite/noticeboard/${match.params.id}`)
        setDatas(fetchdeletedata)
     //    setDel = true
     }
     console.log(datas)
     useEffect(() => {
        editNoticeFunction();
       }, [])
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatas(prevState => ({
            ...prevState,
            [name]: value
        }))  
    }

    const handleSubmit = () => {
        const daat = {
                "notice_title": "",
                "notice_description": "",
                "created_by": "",
            }
            // const redirection = (<Redirect to="/managenotice" />)
            const fetchnoticepost = fetch ("http://127.0.0.1:8000/adminsite/noticeboard/", 
            {
                method: 'PUT', 
                body:JSON.stringify(datas), 
                headers:{ 
                    "Content-Type": "application/json"
                 }
            })
            .then(res => res.json())
            .then(() => window.location="/managenotice");
            // .then(redirection)
                      
            console.log(daat)
            
    }
    return (
        <div className="container container-fluid">
            <Form>
                <div className='row text-left'>
                    <FormGroup className="col-sm-6">
                        <Label for="notice-title">Notice Title</Label>
                        <Input
                            type="text"
                            name="notice_title"
                            id="notice_title"
                            onChange={handleChange}
                            placeholder="notice_title"
                            required />
                    </FormGroup>
                </div>
                <div className='row text-left'>
                    <FormGroup className="col-sm-6">
                        <Label for="notice-description">Notice Description</Label>
                        <Input
                            type="textarea"
                            name="notice_description"
                            id="notice_description"
                            onChange={handleChange}
                            rows={5}
                        />
                    </FormGroup>
                </div>
                <Button className="float-left" color="primary" onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default UpdateNotice;
