import React, { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaMinus, FaInfo } from 'react-icons/fa';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
} from 'reactstrap';

import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

function UpdateNotice(props) {
    const [del, setDel] = useState(false);
    const [datas, setDatas] = useState({})
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const fetchedData = await fetch(`http://127.0.0.1:8000/adminsite/noticeboard/${props.match.params.id}`);
        const jsonFetchedData = await fetchedData.json();
        console.log(jsonFetchedData);
        setDatas(jsonFetchedData);
        console.log(datas)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatas(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        const fetchnoticepost = fetch(`http://127.0.0.1:8000/adminsite/noticeboard/${props.match.params.id}/`,
            {
                method: 'PUT',
                body: JSON.stringify(datas),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(() => window.location = "/managenotice");
        // .then(redirection)

    }
    return (
        <div className="container container-fluid">
            <Form>
                <div className='row text-left'>
                    <FormGroup className="col-sm-6">
                        <Label for="notice-title">Notice ID</Label>
                        <Input
                            type="text"
                            name="notice_id"
                            id="notice_od"
                            defaultValue={datas.id}
                            disabled
                            placeholder="Notice_ID"
                            required />
                    </FormGroup>
                    <FormGroup className="col-sm-6">
                        <Label for="notice-title">Notice Title</Label>
                        <Input
                            type="text"
                            name="notice_title"
                            id="notice_title"
                            onChange={handleChange}
                            defaultValue={datas.notice_title}
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
                            defaultValue={datas.notice_description}
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
