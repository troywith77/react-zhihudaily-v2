
import { getThemes } from '~/services/api';

export const fetchingThemesList = () => ({
  type: 'FETCHING_THEMES_LIST'
})

export const fetchedThemesList = themes => ({
  type: 'FETCHED_THEMES_LIST',
  payload: {
    themes
  }
})

export const fetchThemesList = () => (dispatch) => {
  dispatch(fetchingThemesList());
  getThemes().then((res) => {
    dispatch(fetchedThemesList(res.data.others));
  });
}