import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import './SettingsScreentyle';

class SettingsScreen extends React.Component{
  state = {
    dialogOpen: false
  };

  handleToggleDialog = () => {
    this.setState({
      dialogOpen: !this.state.dialogOpen
    });
  }
  
  render () {
    return (
      <div className="settings-screen">
        <List component="nav">
          <ListItem button onClick={this.handleToggleDialog}>
            <ListItemText primary="关于作者" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText primary="TEST" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="TEST" />
          </ListItem>
        </List>
        <Divider />
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleToggleDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">About me</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Hi, I'm Troy(唐锐). I'm a frontend developer, gym lover and NBA enthusiast currently residing in beautiful ShangHai, China.
            I'm currently working on Wallstreetcn.com
            <a id="getInTouch" href="https://github.com/troywith77" target="_blank" rel="noopener noreferrer">GET IN TOUCH</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggleDialog} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default SettingsScreen;