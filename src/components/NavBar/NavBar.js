import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import NavDrawer from '../NavDrawer/NavDrawer'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  getInTouch: {
    display: 'block',
    color: '#3f51b5'
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    dialogOpen: false
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOpenDialog = () => {
    this.setState({ dialogOpen: true })
  };

  handleCloseDialog = () => {
    this.setState({ dialogOpen: false, anchorEl: null })
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <NavDrawer />
            <Typography type="title" color="inherit" className={classes.flex}>
              知知日报
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
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
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">About me</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Hi, I'm Troy(唐锐). I'm a frontend developer, gym lover and NBA enthusiast currently residing in beautiful ShangHai, China.
            I'm currently working on Wallstreetcn.com
            <a style={styles.getInTouch} href="https://github.com/troywith77" target="_blank" rel="noopener noreferrer">GET IN TOUCH</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);