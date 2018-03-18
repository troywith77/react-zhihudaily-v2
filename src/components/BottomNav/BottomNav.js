import React from 'react';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import GradeIcon from 'material-ui-icons/Grade';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
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
        <BottomNavigationAction label="故事" value="/" icon={<RestoreIcon />} />
        <BottomNavigationAction label="主题" value="/themes" icon={<GradeIcon />} />
        <BottomNavigationAction label="设置" value="/settings" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);