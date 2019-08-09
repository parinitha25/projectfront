import React, { Component } from 'react';
import axios from 'axios';
import './CSS/Schedule.css';
import Navbar from './Navbar';

class Schedule extends Component {
    state = { users:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8000/appt')
        .then(res => {
            this.setState({users:res.data});
            console.log(this.state.users);
        });
    }
    render() {
      return (
        <div>
          <Navbar/>
            <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
                <div className='apptname'><i>Schedule</i></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
            <div className="row"> 
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><p className="schheading">Name</p>
              <div className="schheadingp">{this.state.users.map(user => <p>{user.name}</p>)}</div></div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><p className="schheading">Email</p>
              <div className="schheadingp">{this.state.users.map(user => <p>{user.email}</p>)}</div></div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 "><p className="schheading">Date</p>
              <div className="schheadingp">{this.state.users.map(user => <p>{user.date}</p>)}</div></div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 "><p className="schheading">Time</p>
              <div className="schheadingp">{this.state.users.map(user => <p>{user.time}</p>)}</div></div>
              <hr/>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
            <div className="row"> 
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <input type="button" value="Edit" className="sendbta"></input>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <input type="button" value="Delete" className="sendbta"></input>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        </div>
    );
}
}

export default Schedule;