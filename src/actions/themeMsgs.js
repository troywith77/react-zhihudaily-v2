import { normalize } from 'normalizr';
import { getTheme } from '~/services/api';
import { themeSchema } from '~/schemas/themes';

export const fetchingTheme = () => ({
  type: 'FETCHING_THEME'
})

export const fetchedTheme = payload => ({
  type: 'FETCHED_THEME',
  payload
})

export const fetchTheme = id => (dispatch, getState) => {
  dispatch(fetchingTheme());
  // 如果已打开过的主题不再重新请求，因为这些内容不会更新
  if (getState().themeMsgs.themes[id]) return;
  return getTheme(id).then((res) => {
    dispatch({
      type: 'RECEIVED_THEME',
      payload: {
        ...normalize(
          res.data,
          themeSchema
        ),
        id
      }
    })
    dispatch(fetchedTheme({
      ...res.data,
      id
    }));
  })
}