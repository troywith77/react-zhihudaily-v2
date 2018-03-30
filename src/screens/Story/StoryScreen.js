import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Story from '~/containers/Story/Story';
import Loading from '~/components/Loading/Loading';
import { getStory, getStoryLongComments, getStoryShortComments } from '~/services/api';
import * as Actions from '~/actions';

class StoryScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isFetching: true,
      data: {},
      shortComments: [],
      longComments: []
    };
    this.id = this.props.match.params.id;
  }

  async getStory () {
    const storyResponse = await getStory(this.id);
    const longComments = await getStoryLongComments(this.id);
    const shortComments = await getStoryShortComments(this.id);

    this.setState({
      data: {...storyResponse.data},
      isFetching: false,
      type: storyResponse.data.theme ? 'theme' : 'story',
      longComments: longComments.data.comments,
      shortComments: shortComments.data.comments
    });
  }

  componentWillMount () {
    window.scrollTo(0, 0);
  }

  componentDidMount () {
    this.getStory();
  }

  render () {
    const { isFetching } = this.state;
    if (isFetching) return (
      <div style={{ margin: '100px 0' }}>
        <Loading loading={isFetching} />
      </div>
    );
    return <Story {...this.state} />;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(StoryScreen);