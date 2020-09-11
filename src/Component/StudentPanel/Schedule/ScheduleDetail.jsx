import React , {useState,useEffect} from 'react';
// import {Header, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";





function ScheduleDetail(match) {

    useEffect(()=> {
        fetchItems();
    },[]);

    const [datas,setDatas] = useState([]);

     const fetchItems = async () =>{
         const data = await fetch(
             `http://127.0.0.1:8000/adminsite/schedule/$(match.params.id`);
         const datas = await data.json();
         console.log(datas);
         setDatas(datas)


     };
    return (

        <div className="maincontent">
             <h2> {datas.schedule}</h2>

        </div>
    );
}

export default ScheduleDetail;