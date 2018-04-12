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

  componentWillReceiveProps (nextProps) {
    // 切换主题时因为路由主体不会变化，只有id变了，所以需要在这里判断id
    if (this.props.match.params.id === nextProps.match.params.id) return;
    this.fetchData(nextProps.match.params.id);
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
