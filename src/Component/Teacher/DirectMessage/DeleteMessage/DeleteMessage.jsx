import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const DeleteMessage = ({match}) => {
    const deleteMessageFunction = async() =>{
        const fetchdeletedata = await fetch(`http://127.0.0.1:8000/adminsite/directmessage/${match.params.id}`,
        {
            method: 'DELETE',
            headers: {
             "Authorization": `Token ${localStorage.getItem('token')}`,
             "Content-Type": "application/json"
           }
         }).then(res => window.location="/message")
    }
    useEffect(() => {
        deleteMessageFunction();
      }, [])


      return(
          <div>Message Deleting</div>
      )

};
export default DeleteMessage;