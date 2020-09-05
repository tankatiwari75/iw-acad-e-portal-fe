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
                id="password"
                placeholder="password placeholder"/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  )

  return (
    <div align="center">
      {adminlogin}      
      <Button color="warning" onClick="handleLogin">Submit</Button>
    </div>

  );
};

export default LoginHeader;