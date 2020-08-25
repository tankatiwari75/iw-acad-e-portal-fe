import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const DeleteStudent = ({match}) => {
    // const [del, setDel] = useState(false);
    const deleteStudentFunction = async() =>{
       const fetchdeletedata = await fetch(`http://127.0.0.1:8000/adminsite/studentregister/${match.params.id}`,{method: 'DELETE'});
    //    setDel = true
    }
    useEffect(() => {
        deleteStudentFunction();
      }, [])

    // const checkDel = () => del ? <Redirect to = "/managestudent" /> : <h1>Data not deleted</h1>

    return (
        // checkDel
        <Redirect to="/managestudent" />
    );
};

export default DeleteStudent;