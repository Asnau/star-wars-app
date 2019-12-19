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

//import Searchbar from './searchbar';
import Searchbar1 from './searchbar1';

export default function SearchPlanets(props) {

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
        </Navbar>
        <Searchbar1/>
    </React.Fragment>
  );
}