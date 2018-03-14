import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import IndexScreen from './screens/Index/IndexScreen';
import StoryScreen from './screens/Story/StoryScreen';
import ThemeScreen from './screens/Theme/ThemeScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={IndexScreen} />
          <Route path="/story/:id" component={StoryScreen} />
          <Route path="/theme/:id" component={ThemeScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
