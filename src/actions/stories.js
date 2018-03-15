import {
  getLatestStories,
  getStoriesBefore
} from '../services/api';

export const fetchingStories = () => ({
  type: 'FETCHING_STORIES'
})

export const fetchedLatestStories = data => ({
  type: 'FETCHED_LATEST_STORIES',
  payload: data
})

export const fetchLatestStories = () => (dispatch, getState) => {
  if (getState().stories.latestStories.length) return;
  dispatch(fetchingStories());
  getLatestStories().then((res) => {
    dispatch(fetchedLatestStories(res.data));
  })
}

export const fetchingStoriesBefore = () => ({
  type: 'FETCHING_STORIES_BEFORE'
})

export const fetchedStoriesBefore = data => ({
  type: 'FETCHED_STORIES_BEFORE',
  payload: data
})

export const fetchStoriesBefore = (date) => (dispatch) => {
  dispatch(fetchingStories());
  getStoriesBefore(date).then((res) => {
    dispatch(fetchedStoriesBefore(res.data));
  });
}