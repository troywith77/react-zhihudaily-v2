import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';

import { getThemes } from '../../services/api';
import { convertImageSrc } from '../../services/utils';
import './style.scss';

const styles = {
  list: {
    width: 250,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

class NavDrawer extends React.Component {
  state = {
    left: false,
    themes: []
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  componentDidMount () {
    getThemes().then((res) => {
      this.setState({ themes: res.data.others })
    })
  }

  render() {
    const sideList = (
      <div className="nav-drawer-list">
        <List>
          {
            this.state.themes.map((theme) => {
              return (
                <ListItem key={theme.id}>
                  <ListItemAvatar>
                    <Avatar alt={theme.name} src={convertImageSrc(theme.thumbnail)} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Link to={`/theme/${theme.id}`}>{theme.name}</Link>}
                  />
                </ListItem>
              )
            })
          }
        </List>
      </div>
    );

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer('left', true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);