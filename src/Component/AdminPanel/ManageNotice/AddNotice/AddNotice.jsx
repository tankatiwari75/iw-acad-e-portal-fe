import React, { useState, useEffect } from 'react'

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';
function AddNotice(props) {
    const [datas, setDatas] = useState({
        "notice_title": "",
        "notice_description": "",
        "created_by": localStorage.getItem("username"),
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatas(prevState => ({
            ...prevState,
            [name]: value
        }))  
        // console.log(datas)
    }

    const handleSubmit = () => {
        // console.log(datas)
            const fetchnoticepost = fetch ("http://127.0.0.1:8000/adminsite/noticeboard/", 
            {
                method: 'POST', 
                body:JSON.stringify(datas), 
                headers:{ 
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem('token')}`
                 }
            })
            // .then(res => res.json())
            .then(() => window.location="/managenotice");
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

export default AddNotice;
