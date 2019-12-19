import React from 'react';
import {
Nav,
Navbar,
NavItem,
Button,
Container
} from  'react-bootstrap';

import Searchbar from './searchbar';

import './SideBar.css';

class Searchbar1 extends React.Component {
    /* openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      } */

    

    render() {
        return(
            <React.Fragment>
            
            <div className="wrapper" style={{}}>
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3 style={{fontSize: '1.75rem'}}>Welcome User</h3>
                        <strong>AN</strong>
                    </div>

                    <Searchbar/>
                </nav>

                {/*  Page Content  */}
            </div>
            {/* <div id="main">
                <span style= {{fontSize:"30px", cursor:"pointer"}} onClick={this.openNav}>&#9776; open</span>
            </div>
            <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div> */}
                
            </React.Fragment>
        )
    }
}

export default Searchbar1;