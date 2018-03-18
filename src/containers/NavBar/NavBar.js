import React from 'react';
import { withRouter } from 'react-router-dom';
import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft';

import './NavBarStyle';
import githubIcon from '~/assets/images/GitHub-Mark-Light-32px.png';

class MenuAppBar extends React.Component {
  handleHistoryBack = () => {
    this.props.dispatch(goBack());
  }

  renderBackButton = () => {
    if (this.props.pathname === '/') return;
    return <KeyboardArrowLeftIcon onClick={this.handleHistoryBack} />
  }

  render() {
    const { documentTitle } = this.props;
    return (
      <nav className="nav">
        <AppBar position="static">
          <Toolbar>
            {this.renderBackButton()}
            <Typography type="title" color="inherit" className="nav-title">
              {documentTitle}
            </Typography>
            <div>
              <IconButton>
                <a href="https://github.com/troywith77/react-zhihudaily-v2" target="_blank" rel="noreferrer noopener" className="nav-github">
                  <img src={githubIcon} alt="github icon"/>
                </a>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  documentTitle: state.document.title,
  pathname: state.router.location.pathname
});

export default connect(
  mapStateToProps
)(
  withRouter(MenuAppBar)
);
