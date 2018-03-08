import React from 'react';
import { getTheme } from '../../services/api'
import StoryList from '../../components/StoryList/StoryList';

class ThemeScreen extends React.Component {
  state = {
    stories: []
  }

  fetchData (id) {
    getTheme(id).then((res) => {
      console.log(res.data)
      this.setState({
        stories: res.data.stories
      })
    })
  }

  componentDidMount () {
    this.fetchData(this.props.match.params.id)
  }

  componentWillReceiveProps (nextProps) {
    this.fetchData(nextProps.match.params.id)
  }

  render () {
    return (
      <div>
        <StoryList stories={this.state.stories} />
      </div>
    )
  }
}

export default ThemeScreen
