import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft';

import './NavBarStyle';
import githubIcon from '~/assets/images/GitHub-Mark-Light-32px.png';

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleHistoryBack = () => {
    this.props.history.goBack();
  }

  renderBackButton = () => {
    if (this.props.location.pathname === '/') return;
    return <KeyboardArrowLeftIcon onClick={this.handleHistoryBack} />
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <nav className="nav">
        <AppBar position="static">
          <Toolbar>
            {this.renderBackButton()}
            <Typography type="title" color="inherit" className="nav-title">
              日报
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <a href="https://github.com/troywith77" target="_blank" rel="noreferrer noopener" className="nav-github">
                  <img src={githubIcon} alt="github icon"/>
                </a>
              </IconButton>
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleOpenDialog}>About me</MenuItem>
              </Menu> */}
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

export default withRouter(MenuAppBar);