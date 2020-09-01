import React, { useEffect, useState } from 'react';
import { FaPlus, FaTrash, FaMinus, FaInfo } from 'react-icons/fa';
// import css
import "./notice.css"

// react-router-dom
import {
    Link
} from "react-router-dom";


import {

} from "reactstrap"
function Notice(props) {
    

    const [data,
        setData] = useState([]);

    const fetchData = async () => {
        const fetchedData = await fetch("http://127.0.0.1:8000/adminsite/noticeboard/");
        const jsonFetchedData = await fetchedData.json();
        // console.log(jsonFetchedData);
        setData(jsonFetchedData);
        console.log(data)
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="maincontent">
                <div className="conatiner noticebody">
                {data.map(notice => (
                    <div className="notices">
                        <div className="row">
                            <div className="title col-sm-6">
                                <h4 style={{ textAlign: "left" }}><strong>{notice.notice_title}</strong></h4>
                            </div>
                        </div>
                        <p className="description">{notice.notice_description}</p>
                        <p className="created">-{notice.created_by}</p>

                        <hr ></hr>
                    </div>
                ))}

                {/* <div className="col-sm">Recent Activity</div> */}
            </div>
                {/* <div className="col-sm">Recent Activity</div> */}
                </div>
    );
}

export default Notice;
