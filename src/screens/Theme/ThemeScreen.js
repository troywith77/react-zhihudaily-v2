import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentTitle from '~/containers/DocumentTitle/DocumentTitle';
import StoryList from '~/components/StoryList/StoryList';
import * as ThemesActionCreators from '~/actions/entities-theme';
import { getSelectedTheme, getSelectedThemeStories } from '~/reducers/timeline/theme';

class ThemeScreen extends React.Component {
  fetchData (id) {
    this.props.actions.fetchTheme(id);
  }

  componentDidMount () {
    this.fetchData(this.props.match.params.id);
  }

  render () {
    const { currentTheme, currentThemeStories } = this.props;
    return (
      <DocumentTitle
        title={currentTheme.name}
        render={() => (
          <div>
            <StoryList stories={currentThemeStories} />
          </div>
        )}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentTheme: getSelectedTheme(state, ownProps.match.params.id),
  currentThemeStories: getSelectedThemeStories(state, ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ThemesActionCreators, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeScreen);
