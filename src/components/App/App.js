import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.scss';
import login from '../login';
// import Signup from '../Signup';

class App extends Component {
render() {
return (
<Switch>
<Route exact path="/" component={login} />
{/* <Route exact path="/" component={Signup} /> */}
</Switch>
);
}
}

export default App;