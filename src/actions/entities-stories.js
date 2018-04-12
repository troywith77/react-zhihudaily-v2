import { normalize } from 'normalizr';
import { latestStorySchema, historyStorySchema } from '~/schemas/stories';
import { getLatestStories, getStoriesBefore } from '../services/api';

export const fetchingStories = () => ({
  type: 'FETCHING_STORIES'
})

export const fetchLatestStories = () => (dispatch, getState) => {
  if (getState().timeline.home.entries.latest.length) return;
  dispatch(fetchingStories());
  getLatestStories().then((res) => {
    dispatch({
      type: 'RECEIVED_ENTITIES_LATEST_STORIES',
      payload: normalize(res.data, latestStorySchema)
    });
  })
}

export const fetchStoriesBefore = (date) => (dispatch) => {
  dispatch(fetchingStories());
  getStoriesBefore(date).then((res) => {
    dispatch({
      type: 'RECEIVED_ENTITIES_HISTORY_STORIES',
      payload: normalize(res.data, historyStorySchema)
    });
  });
}