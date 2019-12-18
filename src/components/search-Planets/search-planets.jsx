import React, { useState } from "react";
import { 
    Button, 
    Form,
    FormGroup, 
    FormControl, 
    FormLabel,
    Nav,
    Navbar
} from "react-bootstrap";

export default function SearchPlanets(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
        <Navbar expand="lg" variant="light" sticky="top" style={{backgroundColor: '#004085d4'}}>
            <Navbar.Brand href="#home">
                <img alt="" src="" width="30" height="30" className=" d-inline-block align-top"/>
                {'STAR WARS search far far away'} 
            </Navbar.Brand>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light" onClick={handleSubmit}>Search</Button>
            </Form>
        </Navbar>
    </React.Fragment>
  );
}