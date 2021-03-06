import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import * as Actions from '~/actions';
import { getThemes } from '~/reducers/timeline/themes';

import DocumentTitle from '~/containers/DocumentTitle/DocumentTitle';
import MediaCard from '~/components/MediaCard/MediaCard';
import { convertImageSrc } from '~/services/utils';
import './ThemesScreenStyle';

class ThemesScreen extends React.Component {
  onClickTheme = (id) => {
    this.props.history.push(`/theme/${id}`);
  }

  componentDidMount () {
    this.props.actions.fetchThemesList();
  }

  render () {
    return (
      <DocumentTitle
        title="主题"
        render={() => (
          <div className="themes-list">
            {
              this.props.themes.map((theme) => {
                return (
                  <div style={{ marginBottom: 10 }} key={theme.id}>
                    <MediaCard
                      header={theme.name}
                      subheader={theme.description}
                      image={convertImageSrc(theme.thumbnail)}
                      actions={
                        <Button size="small" color="primary" onClick={() => this.onClickTheme(theme.id)}>
                          查 看
                        </Button>
                      }
                    />
                  </div>
                )
              })
            }
          </div>
        )}
      />
    )
  }
}

const mapStateToProps = state => ({
  themes: getThemes(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemesScreen);