import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const DeleteNotice = ({match}) => {
    // const [del, setDel] = useState(false);
    const deleteNoticeFunction = async() =>{
       const fetchdeletedata = await fetch(`https://e-portal-application.herokuapp.com/adminsite/noticeboard/${match.params.id}`,
       {
           method: 'DELETE',
           headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
          }

        })
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