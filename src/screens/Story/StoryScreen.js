import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import URI from 'urijs'

import DocumentTitle from '~/containers/DocumentTitle/DocumentTitle';
import NormalStory from '~/components/NormalStory/NormalStory';
import ThemeStory from '~/components/ThemeStory/ThemeStory';
import Loading from '~/components/Loading/Loading';
import { getStory, getStoryLongComments, getStoryShortComments } from '~/services/api';
import { convertImageSrc } from '~/services/utils';
import * as Actions from '~/actions';
import './StoryScreenStyle';

class Story extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fetching: true,
      data: {},
      shortComments: [],
      longComments: []
    };
    this.id = this.props.match.params.id;
  }

  processHtml = (body) => {
    const element = document.createElement('div');
    element.innerHTML = body;
    Array.from(element.querySelectorAll('img')).forEach((img) => {
      img.setAttribute('alt', img.getAttribute('src'));
      img.setAttribute('src', convertImageSrc(img.getAttribute('src')));
    });
    Array.from(element.querySelectorAll('a')).forEach((link) => {
      const href = link.getAttribute('href');
      const uri = URI(href);
      const segment = uri.segment();
      // const host = uri.host();
      // const pathname = uri.pathname();
      link.setAttribute('target', '_blank');
      if (href.indexOf('daily.zhihu.com/story') > -1) {
        const id = segment.slice(-1);
        link.setAttribute('href', `/story/${id}`)
      }
    });
    Array.from(element.querySelectorAll('br')).forEach((br) => {
      br.parentNode.removeChild(br);
    });
    return element.innerHTML;
  }

  getStory = () => {
    getStory(this.id).then((res) => {
      const body = this.processHtml(res.data.body);
      const data = {
        ...res.data,
        body
      };
      this.setState({
        data,
        fetching: false,
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
    const { type, data: { title } } = this.state;
    const loading = !type;
    let element;
    if (loading) {
      element = (
        <div className="story-loading">
          <Loading loading={loading} />
        </div>
      );
    }
    if (type === 'theme') element = <ThemeStory state={this.state} />;
    if (type === 'story') element = <NormalStory state={this.state} />;
    return (
      <DocumentTitle
        title={title}
        render={() => element}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Story);