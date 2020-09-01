import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const DeleteNotice = ({match}) => {
    // const [del, setDel] = useState(false);
    const deleteNoticeFunction = async() =>{
       const fetchdeletedata = await fetch(`http://127.0.0.1:8000/adminsite/noticeboard/${match.params.id}`,{method: 'DELETE'})
       .then(() => window.location="/managenotice");
    //    setDel = true
    }
    useEffect(() => {
        deleteNoticeFunction();
      }, [])

    // const checkDel = () => del ? <Redirect to = "/managestudent" /> : <h1>Data not deleted</h1>

    return (
        // checkDel
        // <Redirect to="/managestudent" />
        <div>

        </div>
    );
};

export default DeleteNotice;