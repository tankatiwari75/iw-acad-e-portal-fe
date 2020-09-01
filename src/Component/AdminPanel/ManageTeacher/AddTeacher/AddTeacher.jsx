import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

const AddTeacher = (props) => {

  const TeacherPostApi = () => {
    console.log("Teacher Added")
  }

  console.log("this props", props.location.aboutProps)
  return (
    <div className="container container-fluid">
      <Form>
        <FormGroup>
          <Label for="Name">First Name</Label>
          <Input
            type="text"
            name="firstname"
            id="exampleEmail"
            placeholder="Enter first name"/>
        </FormGroup>
        <FormGroup>
          <Label for="Name">Middle Name</Label>
          <Input
            type="text"
            name="middlename"
            id="exampleEmail"
            placeholder="Enter Middle Name"/>
        </FormGroup>
        <FormGroup>
          <Label for="Name">Last Name</Label>
          <Input
            type="text"
            name="lastname"
            id="exampleEmail"
            placeholder="Enter Last Name"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter your Email"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Phone Number</Label>
          <Input
            type="number"
            name="number"
            id="phone number"
            placeholder="enter your Phone Number"/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder=" Enter your password "/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Qualifications</Label>
          <Input type="textarea" name="text" id="exampleText"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Profile Picture</Label>
          <Input type="file" name="file" id="ProfilePictureFile"/>
          {/*<FormText color="muted">*/}
          {/*  This is some placeholder block-level help text for the above input. It's a bit*/}
          {/*  lighter and easily wraps to a new line.*/}
          {/*</FormText>*/}
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default AddTeacher;