import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";



function TimetableDetail({match}) {
    // const class_number = 10;

    useEffect(()=> {
        fetchTable();
    },[]);
     const [item,setitems] = useState([]);



     const fetchTable = async () =>{

         const fetcheddata = await fetch(
             `http://127.0.0.1:8000/adminsite/timetable/$(match.params.id)`);
         const jsonfetcheddatas = await fetcheddata.json();
         console.log(jsonfetcheddatas);
         setitems(jsonfetcheddatas)


     };
    return (
    <div className="maincontent">
        {/*<h2> {jsonfetcheddatas.timetable}</h2>*/}
    </div>
    );
}

export default TimetableDetail;