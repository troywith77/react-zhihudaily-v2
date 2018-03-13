import { getLatestStories } from '../services/api';

export const fetchingLatestStories = () => ({
  type: 'FETCHING_LATEST_STORIES'
})

export const fetchedLatestStories = data => ({
  type: 'FETCHED_LATEST_STORIES',
  payload: data
})

export const fetchLatestStories = () => (dispatch) => {
  dispatch(fetchingLatestStories())
  getLatestStories().then((res) => {
    dispatch(fetchedLatestStories(res.data))
  })
}