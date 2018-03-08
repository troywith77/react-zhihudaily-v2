import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomeMsgContainer from './containers/HomeMsgContainer';
import MsgContainer from './containers/MsgContainer/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={HomeMsgContainer} />
          <Route path="/msg/:id" component={MsgContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
