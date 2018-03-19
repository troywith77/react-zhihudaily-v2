import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '~/actions';

class DocumentTitle extends React.Component {
  componentDidMount () {
    document.title = this.props.title;
    this.props.actions.setDocumentTitle(this.props.title);
  }

  componentWillReceiveProps (nextProps) {
    document.title = nextProps.title;
    this.props.actions.setDocumentTitle(nextProps.title);
  }

  componentWillUnmount () {
    this.props.actions.setDocumentTitle();
  }

  render () {
    return this.props.render();
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(DocumentTitle);