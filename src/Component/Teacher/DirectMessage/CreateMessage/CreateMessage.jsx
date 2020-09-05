import React, {useState, useEffect} from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
export default function CreateMessage() {
    const teacher_id = 1;
    const [studentdata, setStudentData] = useState({
        "message": "",
        "student_name": "",
        "teacher_name": teacher_id
    }
    )
    const handleChange = (event) => {
        console.log(event.target.value)
        const { name, value } = event.target;
        setStudentData(prevState => ({
            ...prevState,
            [name]: value
        }))  
    }
    const handleSubmit = () =>{
        console.log(studentdata)
        const fetchstudentpost = fetch ("http://127.0.0.1:8000/adminsite/directmessage/", 
            {
                method: 'POST', 
                body:JSON.stringify(studentdata), 
                headers:{ 
                    "Content-Type": "application/json"
                 }
            })
            .then(res => res.json())
            .then(() => window.location="/");
    }


  const [data,
    setData] = useState([]);

  const fetchData = async() => {
    const fetchedData = await fetch("http://127.0.0.1:8000/adminsite/studentregister/");
    const jsonFetchedData = await fetchedData.json();
    // console.log(jsonFetchedData);
    setData(jsonFetchedData);
    console.log(data)
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" name="message" onChange = {handleChange} id="message"/>
        </FormGroup>
        <FormGroup>
          <Label>
            Student Name
          </Label>
          <Input type="select" name="student_name" id="student_name" onChange={handleChange}>
          <option selected hidden>Choose here</option>
              {data.map((student) =>(
                  <option value={student.id}>
                      {student.first_name+ " " + student.middle_name + " " + student.last_name}
                  </option>
              ))}
          </Input>
        </FormGroup>
        {/* <FormGroup>
          <Label>
            Teacher Name
          </Label>
          <Input type="text" name="teacher_name" id="teacher_name" onChange={handleChange}>
              {teacher_id}
          </Input>
        </FormGroup> */}
        <Button onClick={handleSubmit}>
            Submit
        </Button>
      </Form>
    </div>
  )
}
