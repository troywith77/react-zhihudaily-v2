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

  getStory = () => {
    getStory(this.id).then((res) => {
      const data = {
        ...res.data
      };
      this.setState({
        data,
        isFetching: false,
        type: data.theme ? 'theme' : 'story'
      });
    });
  }

  getStoryLongComments = () => {
    getStoryLongComments(this.id).then((res) => {
      this.setState({ longComments: res.data.comments });
    })
  }

  getStoryShortComments = () => {
    getStoryShortComments(this.id).then((res) => {
      this.setState({ shortComments: res.data.comments });
    })
  }

  componentWillMount () {
    window.scrollTo(0, 0);
  }

  componentDidMount () {
    this.getStory();
    this.getStoryLongComments();
    this.getStoryShortComments();
  }

  render () {
    const { isFetching } = this.state;
    if (isFetching) return (
      <div style={{margin: '100px 0'}}>
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