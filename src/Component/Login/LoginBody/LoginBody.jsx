import React from 'react';
import {Form, Row, Col, FormGroup, Label, Input} from "reactstrap"

const LoginBody = () => {
  return (
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
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
        </Row>
      </Form>
    </div>
    );
  }
  export default LoginBody;

