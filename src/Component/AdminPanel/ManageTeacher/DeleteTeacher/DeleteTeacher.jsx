import React, { useEffect, useState } from 'react';
import { Redirect,Link } from 'react-router-dom';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
  } from 'reactstrap';

const DeleteTeacher = ({match}) => {
    const [del, setDel] = useState(false);
     const [datas, setDatas] = useState({

         "teacher_name": "",
        "email": "",
        "phonenumber": "",
         "qualification":"",
         "profile_picture":"",

     })
    const deleteTeacherFunction = async() =>{
       const fetchdeletedata = await fetch(`http://127.0.0.1:8000/adminsite/teacherregister/${match.params.id}`,{method: 'DELETE'})
       .then(() => window.location="/managesubject");
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