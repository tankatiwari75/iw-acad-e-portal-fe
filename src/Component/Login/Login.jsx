import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap"

const Login = () => {
    const [data, setData] = useState({
        "username":"",
        "password": ""
    })
    const handleChange = (event) => {
        const {name, value} = event.target
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(data)
    }
  
    const handleSubmit = () =>{
            const create_login = fetch("https://e-portal-application.herokuapp.com/adminsite/login/",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => response.json())
            .then(function (data){
              if (data.token){
                localStorage.setItem("token", data.token);
                console.log(data)
                localStorage.setItem("username", data.username);
              }
              else{
                localStorage.setItem("token", 0);
                window.location = "/"
                localStorage.setItem("username", 0);
              }
            })
            .then(session_data => localStorage.setItem("username", data.username))
            .then(logged_in => window.location = "/");
        }

  const adminlogin = (
    <div className="container container-fluid">
      <Form>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                placeholder="Enter Username"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                id="password"
                placeholder="password placeholder"/>
            </FormGroup>
          </Col>
        </Row>
        <Button color="warning" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  )

  return (
    <div align="center">     
      {adminlogin}
    </div>

  );
};

export default Login;