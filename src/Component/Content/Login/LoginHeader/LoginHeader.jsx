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

const LoginHeader = () => {
  const [checkUserType,
    setCheckUserType] = useState("Admin");
  console.log(checkUserType)

  const adminlogin = (
    <div>
      <Form>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  )
  const loginfunction =() =>{
      console.log("Logged in with ", checkUserType)
  }

  return (
    <div align="center">
      <Button color="danger" onClick={() => setCheckUserType("Admin")}>Admin Login</Button>
      <Button color="success" onClick={() => setCheckUserType("Teacher")}>Teacher Login</Button>
      <Button color="primary" onClick={() => setCheckUserType("Student")}>Student Login</Button>
      <h1>{checkUserType + " Login"}</h1>
      {adminlogin}      
      <Button color="warning" onClick={loginfunction}>Submit</Button>
    </div>

  );
};

export default LoginHeader;