import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaMinus, FaRegEdit } from 'react-icons/fa';
// import css
import "./managenotice.css"

// react-router-dom
import {
    Link
} from "react-router-dom";


import {
    Button
} from "reactstrap"


function ManageNotice({ match }) {

    // const [studentdata, setStudentdata] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    // let sn = 1;

    const [data,
        setData] = useState([]);
    
    const fetchData = async () => {
        const fetchedData = await fetch("https://e-portal-application.herokuapp.com/adminsite/noticeboard/",
            {
                method: "GET",
                headers: {
                  "Authorization": `Token ${localStorage.getItem('token')}`,
                  "Content-Type": "application/json"
                }
        });
        const jsonFetchedData = await fetchedData.json();
        console.log(jsonFetchedData);
        setData(jsonFetchedData);
        // console.log(data)
    }
    if (data.length == 0){
        return (
            <div className="maincontent">
                 <div className="conatiner main">
                <Link to={`${match.url}/add-notice`}>
                    <Button color='primary'>Add Notice &nbsp;
                    <FaPlus className='text-light' /></Button>
                </Link>
            </div>
                No Notice
            </div>
        )
    }
    else{
    return (
        <div className="maincontent">
            <div className="conatiner main">
                <Link to={`${match.url}/add-notice`}>
                    <Button color='primary'>Add Notice &nbsp;
                    <FaPlus className='text-light' /></Button>
                </Link>
            </div>
            <div className="conatiner noticebody">
                    <div className="notices">
                        {data.map(notice => (
                                 <div className="row">
                                 <div className="title col-sm-6">
                                     <h4 style={{ textAlign: "left" }}><strong>{notice.notice_title}</strong></h4>
                                 </div>
                                 <div className="links col-sm-6">
                                     <Link to={`${match.url}/update-notice/${notice.id}`} className='col-sm'>
                                         <FaRegEdit className='extraicon icons text-danger' title="Edit" />
                                     </Link>
                                     <Link to={`${match.url}/delete-notice/${notice.id}`} className='col-sm'>
                                         <FaTrash className='extraicon icons text-danger' title="Delete" />
                                     </Link>
                                 </div>
                                 <p className="description">{notice.notice_description}</p>
                        <p className="created">-{notice.created_by}</p>
                             </div>
                        ))}
                       
                        

                        <hr ></hr>
                    </div>
                {/* <div className="col-sm">Recent Activity</div> */}
            </div>
        </div >
    );
                        }
}

export default ManageNotice;