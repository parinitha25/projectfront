import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../actions/loginAction';
import './CSS/Login.css';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {  Email: '', Password: '' };
  }

  handleChangeu(e) {
    this.setState({  Email: e.target.value });
  }

  handleChangep(e) {
    this.setState({ Password: e.target.value });
  }

  handleSubmit() {
    debugger;
    const Email = this.state. Email;
    const Password = this.state.Password;
    const loginDetails = {  Email:  Email, Password: Password };
    console.log(this.props.userAction);
    this.props.submitLogin(loginDetails);
  }

  render() {
    return (
      <div>
        <center className="login-co"><h1>LOGIN</h1></center>
        <div id="login">
          <input value={this.state. Email} onChange={this.handleChangeu.bind(this)} type="Email" id="email" placeholder="Email" />
          <input value={this.state.Password} onChange={this.handleChangep.bind(this)} type="Password" id="password" placeholder="Password" />
          <button type="button" onClick={this.handleSubmit.bind(this)} id="login">Login</button>
        </div>
        <span>Userdetails: {this.props.loginTokenFromReducer} </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loginTokenFromReducer } = state.loginReducers;
  return { loginTokenFromReducer };
};


export default connect(mapStateToProps, { submitLogin })(login);