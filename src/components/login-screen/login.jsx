import React, { useState,useEffect } from "react";
import {
  Route,
  Router,
  Link,
  NavRef,
  Redirect,
} from 'react-router-dom';
import { 
    Button, 
    FormGroup, 
    FormControl, 
    FormLabel,
    Nav,
    Navbar
} from "react-bootstrap";
import SearchPlanets from '../search-Planets/search-planets';
import "./login.css";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  /* useEffect(() => {
     fetch(
        'https://swapi.co/api/people',
      ).then(data => data.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
     }); */

  function handleSubmit(event) {
    event.preventDefault();
    // alert(`Username: ${username}, Password: ${password}`)
    const URL = "https://swapi.co/api/people";
    const otherParam= {
        mode: 'cors',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            "Content-Type": "application/json"
        },
        method: 'GET'
    }
    fetch(URL, otherParam)
        .then(data => data.json())
        .then(data => {
          data.results.map((res) => {
            console.log(res);
            for(let key in res) {
              let new_res = res[key];
              console.log(new_res);
              // if(`${username}`== new_res ) {
                if(`${password}`== new_res ) {
                  alert("Successful Login");
                  setLoggedin(true);
                  return( 
                    <Router>
                    <Route exact path="/">
                      {loggedin ? <Redirect to="/searchPlanet" /> : <SearchPlanets />}
                    </Route>
                    </Router>
                  )
                // }
              }
            }
          })
        })
        .catch(err => console.log(err));
  }

  return (
    <React.Fragment>
    <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" style={{backgroundColor: '#004085d4'}}>
      <Navbar.Brand href="#home">
          <img alt="" src="" width="30" height="30" className=" d-inline-block align-top"/>
          {'STAR WARS search far far away'}
      </Navbar.Brand>
    </Navbar>
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="text" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
    </React.Fragment>
  );
}