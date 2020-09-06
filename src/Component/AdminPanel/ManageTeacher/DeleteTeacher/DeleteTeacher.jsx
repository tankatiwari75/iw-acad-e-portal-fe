import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const DeleteTeacher = ({match}) => {
    const deleteTeacherFunction = async() =>{
        // console.log(match.params.id)
        const fetchdeletedata = await fetch(`http://127.0.0.1:8000/adminsite/teacherregister/${match.params.id}`,
        {
            method: 'DELETE',
            headers: {
             "Authorization": `Token ${localStorage.getItem('token')}`,
             "Content-Type": "application/json"
           }
         })
        .then(() => window.location="/manageteacher");
    //    setDel = true
    }
    useEffect(() => {
        deleteTeacherFunction();
      }, [])


    return (
        // checkDel
        <Redirect to="/manageteacher" />
    );
};

export default DeleteTeacher;