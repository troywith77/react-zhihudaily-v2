import { getLatestStories } from '../services/api';

// export const getLatestStories = () => ({
//   type: 'GET_LATEST_STORIES'
// })

export const getLatestStories = () => (dispatch) => {
  getLatestStories().then((res) => {
    console.log(res.data.stories);
    // this.setState({
    //   stories: res.data.stories,
    //   topStories: res.data.top_stories
    // })
  })
}