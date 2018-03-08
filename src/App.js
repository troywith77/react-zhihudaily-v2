import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import HomeScreen from './screens/Home/HomeScreen';
import StoryScreen from './screens/Story/StoryScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/story/:id" component={StoryScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
