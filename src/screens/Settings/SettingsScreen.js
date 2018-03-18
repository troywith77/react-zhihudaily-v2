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

import DocumentTitle from '~/containers/DocumentTitle/DocumentTitle';
import './SettingsScreentyle';

class SettingsScreen extends React.Component{
  state = {
    aboutDialogOpen: false
  };

  handleToggleDialog = () => {
    this.setState({
      aboutDialogOpen: !this.state.aboutDialogOpen
    });
  }
  
  render () {
    return (
      <DocumentTitle title="设置" render={() => (
        <div className="settings-screen">
          <List component="nav">
            <ListItem button onClick={this.handleToggleDialog}>
              <ListItemText primary="ABOUT" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button component="a" href="https://github.com/troywith77">
              <ListItemText primary="GITHUB" />
            </ListItem>
          </List>
          <Divider />
          <Dialog
            open={this.state.aboutDialogOpen}
            onClose={this.handleToggleDialog}
          >
            <DialogTitle id="alert-dialog-title">ABOUT ME</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              Hi, I'm Troy(唐锐). I'm a frontend developer, gym lover and NBA enthusiast currently residing in beautiful ShangHai, China.
              I'm currently working on Wallstreetcn.com
              <a id="getInTouch" href="mailto:ruitang307@gmail.com" target="_blank" rel="noopener noreferrer">GET IN TOUCH</a>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleToggleDialog} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
      />      
    )
  }
}

export default SettingsScreen;