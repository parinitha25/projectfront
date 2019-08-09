import React, { Component } from 'react';
import {NavDropdown } from 'react-bootstrap';
import logot from '../logot.svg';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-sm navbar-light bg-info navbar">
        <img src={logot} className="img" alt="logo" />
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link homen " href="./home">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./service">Services</a>
          </li>
          <li class="nav-item pages">
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="./appt">Appointment</NavDropdown.Item>
              <NavDropdown.Item href="./ourc">our client page</NavDropdown.Item>
              <NavDropdown.Item href="#">Schedule page</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contact">ContactUs</a>
          </li>
          </ul>
          <div className='search_box1'>
            <input className='search_txt1' type="text" placeholder='Type to search'></input>
            <a className="search_btn1" href="#"><i className="fa fa-search"></i></a>
          </div> 
          <a class="nav-link logout" href="./signin">Login</a>
          <a class="nav-link logout" href="./signup">Logout</a>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;


