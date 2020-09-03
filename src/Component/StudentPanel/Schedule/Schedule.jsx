import React , {useState,useEffect} from 'react';
import {Header, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
// import PDFViewer from './components/PDFViewer/PDFViewer';




function Schedule(props) {

    useEffect(()=> {
        fetchItems();
    },[]);

    const [datas,setDatas] = useState([]);

     const fetchItems = async () =>{
         const data = await fetch(
             "http://127.0.0.1:8000/adminsite/schedule/");
         const datas = await data.json();
         console.log(datas);
         setDatas(datas)


     };
    return (

        <div className="maincontent">
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
          </div>
        </div>
    );
}

export default Schedule;