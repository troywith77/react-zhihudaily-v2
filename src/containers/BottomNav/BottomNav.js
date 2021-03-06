import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import GradeIcon from 'material-ui-icons/Grade';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';

import './BottomNavStyle';

class BottomNav extends React.Component {
  handleChange = (event, value) => {
    this.setState({ value });
    this.props.dispatch(push(value));
  };

  render() {
    const value = this.props.pathname;
    if ((/\/story\//).test(value)) {
      return null;
    }
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className="bottom-nav"
      >
        <BottomNavigationAction label="故事" value="/" icon={<RestoreIcon />} />
        <BottomNavigationAction label="主题" value="/themes" icon={<GradeIcon />} />
        <BottomNavigationAction label="设置" value="/settings" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    );
  }
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname
});

export default connect(
  mapStateToProps
)(BottomNav);