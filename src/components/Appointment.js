import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import './CSS/Appointment.css';
import Navbar from './Navbar';
import Footer from './Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {appointment} from './Userindex';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      namel:'',
      email:''
     
    }; 
  }
  handleChange=(date)=>{
    this.setState({
      startDate: date,
     
    });
  }
  handleChangeg=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  handleSubmitg=(e)=>{
    debugger
    e.preventDefault();
    let t=0;
    let reqobj={
      email:this.state.email,
      name:this.state.namel,
      date:this.state.startDate,
      time:this.state.startDate
    }
    console.log(this.state);
    let reg_user=/^[A-Za-z0-9]{2,10}$/;
    let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!this.state.namel) this.setState({namelError:'Name is required'});
    else if(!reg_user.test(this.state.namel)) this.setState({namelError:'Invalid name'});
    else{
        t++;
        this.setState({namelError:''});
    }   
    if(!this.state.email) this.setState({emailError:'Email is required'});
    else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
    else {
      t++;
      this.setState({emailError:''});
    }
    if(t>1) {   
      this.props.history.push('/sch')    
    } 
    console.log(reqobj);
      appointment(reqobj).then(res => {
      })
      .catch (res=> {
        prompt(res)
      })
  }    

  render() {
    const { email, namel,date,time} = this.state
      return (
      <div>
        <Navbar/>
          <div className="row1">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
             <div className='apptname'><i>Appointment</i></div>
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
          </div>
          <Form onSubmit={this.handleSubmitg}>
            <label className="formg">Get in Touch</label>
            <Form.Group className="date">
              <label><b>Name</b></label>
              <input type="text" className="width" name="namel" onChange={this.handleChangeg} value={namel}/>
              <p className="colorform">{this.state.namelError}</p>
            </Form.Group>
            <Form.Group className="date">
              <label><b>Email</b></label>
              <input type="text" className="width"  name="email" onChange={this.handleChangeg} value={email}/>
              <p className="colorform">{this.state.emailError}</p>
            </Form.Group>
            <Form.Group>
              <label className="datet"><b>Date</b></label>
              <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  className="widthd"
              />
            </Form.Group>
            <Form.Group >
              <label className="datet"><b>Time</b></label>
              <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
                  className="widthd"
              />
            </Form.Group>   
              <input type="submit" value="send" className="sendbta"></input>
              <button type="submit" className="resetbta">Reset</button>  
          </Form>
        {/* <Footer/> */}
      </div>
    );
  }
}
export default Appointment;



