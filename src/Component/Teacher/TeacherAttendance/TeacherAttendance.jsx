import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

import './TeacherAttendance.css';

// class TeacherAttendance extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your favorite flavor:
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
function TeacherAttendance() {
    const [sutdents, setstudents] = useState([]);
    const [classes, setclasses] = useState([]);
    const teacher_id = "102"
    let sn = 1;

    // const fetchData = async () => {
    //     const fetchedData = await fetch("http://127.0.0.1:8000/teachers/10/1/Math/");
    //     const jsonFetchedData = await fetchedData.json();
    //     // console.log(jsonFetchedData);
    //     setstudents(jsonFetchedData);
    // }
    useEffect(() => {
        //fetchData();
        FetchTeacherClass();
    }, [])
    const FetchTeacherClass = async () => {
        const fetchedData = await fetch(`http://127.0.0.1:8000/teachers/${teacher_id}`);
        const jsonFetchedData = await fetchedData.json();
        setclasses(jsonFetchedData)
    }
    // useEffect(async() => {
    //     const fetchStudents= await fetch(``)
    //     return () => {
    //         cleanup
    //     }
    // }, [input])


    return (
        <div className="main">
            <div className="row">
                <div className="col-sm-2 form">
                    <Form>
                        <FormGroup>
                            <Input type="select" name="select" id="exampleSelect">
                                {classes.map(classnumber => (

                                    <option value={classnumber.class_number}>{classnumber.subject_name}</option>
                                ))}</Input>
                        </FormGroup>
                        {/* <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                {classes.map(classnumber=>(
                    
                    <option>{classnumber.subject_name}</option>  
                ))}</Input>
                </FormGroup> */}
                    </Form>
                </div>
                <div className="col-sm-2">
                    <Button>
                        Get Students
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default TeacherAttendance
