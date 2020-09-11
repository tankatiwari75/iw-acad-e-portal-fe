import React, {useEffect, useState} from 'react';
// import { Header, Table, Rating } from 'semantic-ui-react';
//import {Table} from 'reactstrap';
import {Link} from "react-router-dom";
import { Accordion, Container, Card } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';


function Timetable(props) {
    // const class_number = 10;

    useEffect(()=> {
        fetchTable();
    },[]);
     const [datas,setDatas] = useState([]);



     const fetchTable = async () =>{

         const fetcheddata = await fetch(
             "http://127.0.0.1:8000/adminsite/timetable/${`class_number`}");
         const jsonfetcheddatas = await fetcheddata.json();
         console.log(jsonfetcheddatas);
         setDatas(jsonfetcheddatas)


     };
    return (
    <div className="maincontent">
        {/*{datas.map(item => (*/}
        {/*    <Link  key = (item.itemid ) className="col-sm box btn-ripple nounderline" ><h5 className="text-danger"><h5>Class {item.class_number}</h5></Link>*/}

        {/*)) }*/}
      <div className="container">
        <div className="row">

            {/*<Link className="col-sm box btn-ripple nounderline" to={`${match.url}/edit-teacher`}><h5 className="text-danger">Class 1</h5></Link>*/}
             <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 1</h5></Link>
             <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 2</h5></Link>
             <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 3</h5></Link>
            <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 4</h5></Link>
            <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 5</h5></Link>

        </div>

      </div>
           <div className="container">
               <div className="row">
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 6</h5></Link>
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 7</h5></Link>
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 8</h5></Link>
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 9</h5></Link>
               <Link className="col-sm box btn-ripple nounderline" ><h5 className="text-danger">Class 10</h5></Link>


</div>
             <img alt="" src={"/hunter/picture?page=" + this.props.match.params.id} />
          </div>
    </div>
    );
}

export default Timetable;