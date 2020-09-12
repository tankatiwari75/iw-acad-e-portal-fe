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
    const teacher_id = 102;
    const [studentdata, setStudentData] = useState({
        "message": "",
        "admission_number": "",
        "attachment": null,
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
    const handleSubmit = async () =>{
        console.log(studentdata)
        const fetchstudentpost = await fetch("http://127.0.0.1:8000/adminsite/directmessage/", 
            {
                method: 'POST', 
                body:JSON.stringify(studentdata), 
                headers:{ 
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem('token')}`,
                 }
            // }).then(response=>{
            //   if (response.ok){
            //     window.location = "/message"
            //   }
            //   else{
            //     alert("Error Creating Message")
            //   }
             })
     }


  const [data,
    setData] = useState([]);

  const fetchData = async() => {
    const fetchedData = await fetch("http://127.0.0.1:8000/adminsite/studentregister/",
    {
      method: 'GET', 
      headers:{ 
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem('token')}`,

       }
    });
    const jsonFetchedData = await fetchedData.json();
    // console.log(jsonFetchedData);
    setData(jsonFetchedData);
    console.log(data)
    console.log(studentdata.student_admission_number)
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

          <Input type="select" name="admission_number" id="admission_number" onChange={handleChange}>
          <option selected hidden>Choose here</option>
              {data.map((student) =>(
                  <option value={student.admission_number}>
                      {student.student_user.first_name+ " "  + student.student_user.last_name}
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
        <Button type="submit" onClick={handleSubmit}>
            Submit
        </Button>
      </Form>
    </div>
  )
}
