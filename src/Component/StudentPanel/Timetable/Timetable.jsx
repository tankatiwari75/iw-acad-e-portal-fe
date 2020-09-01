import React, {useEffect, useState} from 'react';
import { Header, Table, Rating } from 'semantic-ui-react';
//import {Table} from 'reactstrap';
import {Link} from "react-router-dom";


function Timetable(props) {
    const class_number = 10;
    const [datas,setDatas] = useState([]);
    useEffect(()=> {
        fetchTable();
    },[]);



     const fetchTable = async () =>{
         const fetcheddata = await fetch(
             "http://127.0.0.1:8000/adminsite/timetable/${`class_number`}");
         const jsonfetcheddatas = await fetcheddata.json();
         console.log(jsonfetcheddatas);
         setDatas(jsonfetcheddatas)


     };
    return (
    <div className="maincontent">
      <div className="container">
        <div className="row">

            <Link className="col-sm box btn-ripple nounderline" to={`${match.url}/edit-teacher`}><h5 className="text-danger">Class 1</h5></Link>
             <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>
             <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>
             <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>
            <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>

        </div>

      </div>
           <div className="container">
               <div className="row">
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>


</div>
          </div>
    </div>
    );
}

export default Timetable;