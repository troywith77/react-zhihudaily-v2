import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from '~/containers/NavBar/NavBar';
import BottomNav from '~/containers/BottomNav/BottomNav';
import IndexScreen from '~/screens/Index/IndexScreen';
import ThemesScreen from '~/screens/Themes/ThemesScreen';
import StoryScreen from '~/screens/Story/StoryScreen';
import ThemeScreen from '~/screens/Theme/ThemeScreen';
import SettingsScreen from '~/screens/Settings/SettingsScreen';
import NoMatchScreen from '~/screens/NoMatch/NoMatchScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-inner">
          <Switch>
            <Route path="/" exact component={IndexScreen} />
            <Route path="/themes" exact component={ThemesScreen} />
            <Route path="/story/:id" component={StoryScreen} />
            <Route path="/theme/:id" component={ThemeScreen} />
            <Route path="/settings" component={SettingsScreen} />
            <Route component={NoMatchScreen} />
          </Switch>
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default App;
