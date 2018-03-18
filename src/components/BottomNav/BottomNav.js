import React from 'react';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import { withRouter } from 'react-router-dom';

import './BottomNavStyle';

class BottomNav extends React.Component {
  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(value);
  };

  render() {
    const value = this.props.location.pathname;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className="BottomNav"
      >
        <BottomNavigationAction label="最新" value="/" icon={<RestoreIcon />} />
        <BottomNavigationAction label="主题" value="/themes" icon={<FavoriteIcon />} />
        {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);