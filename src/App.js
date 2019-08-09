import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import login from './components/login';
import Signup from './components/Signup';
import Appointment from './components/Appointment';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Ourclient from './components/Ourclient';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Schedule from './components/Schedule';

// import { Route, Switch,  } from 'react-router-dom';


const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => (
  (localStorage.getItem('token') && localStorage.getItem('user')) ? (
  <IncomingComponent {...props} />
  ) : (
  <Redirect to={{
  pathname: '/appt',
  state: { from: props.location },
  }}
  />
  )
  )}
  />
  );

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path='/home' component={Home}></Route> 
      {/* <Route exact path='/signin' component={login}></Route>  */}
      <Route exact path='/signup' component={Signup}></Route>
      <Route exact path='/appt' component={Appointment}></Route>
      <Route exact path='/about' component={About}></Route> 
      <Route exact path='/service' component={Service}></Route>    
      <Route exact path='/contact' component={Contact}></Route> 
      <Route exact path='/ourc' component={Ourclient}></Route>
      <Route exact path='/foot' component={Footer}></Route>
      <Route exact path='/calci' component={Calculator}></Route>
      <Route exact path='/sch' component={Schedule}></Route>

      {/* <PrivateRoute exact path="/appt" component={Appointment} /> */}
      {/* <PrivateRoute exact path="/confidentiality" component={Confidentiality} /> */}
    
    
      
      </Switch>
      </Router>

    </div>
  );
}

export default App;
