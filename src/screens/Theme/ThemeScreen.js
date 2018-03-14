import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ThemesActionCreators from '~/actions/themes';
import StoryList from '~/components/StoryList/StoryList';

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
    const { currentTheme } = this.props;
    const stories = currentTheme ? currentTheme.stories : [];
    return (
      <div>
        <StoryList stories={stories} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  fetching: state.themes.fetching,
  currentTheme: state.themes.themes[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ThemesActionCreators, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeScreen);
