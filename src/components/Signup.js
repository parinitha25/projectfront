import React, { Component } from 'react';
import logot from '../logot.svg';
import {Form,Button } from 'react-bootstrap';
import '../App.css';
import {register} from './Userindex';
import api from '../api/index';

class Signup extends Component {
  constructor(props){
      super(props);
      this.state={
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
        Phone:'',
        fnameError:'',
        lnameError:'',
        emailError:'',
        passwordError:'',
        phoneError:'', 
      }
  }
  handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit=async()=>{
    // debugger
    const { FirstName,LastName,Email,Password,Phone } = this.state
        const payload = { FirstName,LastName,Email,Password,Phone }



      // e.preventDefault();
      let t=0;
      
      let reg_user=/^[A-Za-z0-9]{2,10}$/;
      let reg_pwd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let reg_mob=/^(\+\d{1,3}[- ]?)?\d{10}$/;
     
      if(!this.state.FirstName) this.setState({fnameError:'Firstname is required'});
      else if(!reg_user.test(this.state.FirstName)) this.setState({fnameError:'Invalid Firstname'});
      else{
           t++;
           this.setState({fnameError:''});
      }
         
      if(!this.state.LastName) this.setState({lnameError:'Lastname is required'});
      else if(!reg_user.test(this.state.LastName)) this.setState({lnameError:'Invalid Lastname'}); 
      else {
          t++;
          this.setState({lnameError:''});
      }
      if(!this.state.Email) this.setState({emailError:'Email is required'});
      else if(!reg_email.test(this.state.Email)) this.setState({emailError:'Invalid Email'}); 
      else {
          t++;
          this.setState({emailError:''});
      }

      if(!this.state.Password) this.setState({passwordError:'Password is required'});
      else if(!reg_pwd.test(this.state.Password)) this.setState({passwordError:'Invalid Password'});
      else {
          t++;
          this.setState({passwordError:''});
      }
      if(!this.state.Phone) this.setState({phoneError:'Mobile number is required'});
      else if(!reg_mob.test(this.state.Phone)) this.setState({phoneError:'Invalid Mobile number'});
      else {
          t++;
          this.setState({phoneError:''});
      }
      if(t>4) {
    //       this.props.history.push('/appt')    
    //   }
    //   console.log(reqobj);
    // register(reqobj).then(res => {
    // })
    // .catch (res=> {
    //     prompt(res)
    // })
    console.log("hii")
    debugger;
            await api.register(payload).then(res => {
                this.setState({
                  FirstName: '',
                  LastName: '',
                  Email: '',
                  Password:'',
                  Phone:''
                })
                console.log('hello')
                this.props.history.push('/appt')
            });
                
        }
  }  
  
  render() {
    const { FirstName,LastName,Email, Password,Phone } = this.state
    return (
      <div> 
      <div className="row">
        <div className="backgroundcl"></div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 loginf">
            <img src={logot}  alt="logo" />
          <Form onSubmit= {this.handleSubmit}>
          <Form.Group>
              <label><b>Firstname</b></label><br/>
              <input type="text" className="widthl" name="FirstName" onChange={this.handleChange} value={FirstName} /> 
              <p className="colorform">{this.state.fnameError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>Lastname</b></label><br/>
              <input type="text" className="widthl" name="LastName" onChange={this.handleChange} value={LastName} /> 
              <p className="colorform">{this.state.lnameError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>Email</b></label><br/>
              <input type="text" className="widthl" name="Email" onChange={this.handleChange} value={Email} /> 
              <p className="colorform">{this.state.emailError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>Password</b></label><br/>
              <input type="text" className="widthl" name="Password" onChange={this.handleChange} value={Password} /> 
              <p className="colorform">{this.state.passwordError}</p>
            </Form.Group>
            <Form.Group>
              <label><b>MobileNumber</b></label><br/>
              <input type="number" className="widthl" name="Phone"  onChange={this.handleChange}  value={Phone}/>
              <p className="colorform">{this.state.phoneError}</p>
              </Form.Group>
              <Button variant="primary" type="submit">Signup</Button>
          </Form>
          </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
      </div>
    </div>
    );
  }
}
export default Signup;