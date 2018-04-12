
import { normalize } from 'normalizr';
import { getThemes } from '~/services/api';
import { themesSchema } from '~/schemas/themes';

export const fetchingThemesList = () => ({
  type: 'FETCHING_THEMES_LIST'
})

export const fetchedThemesList = themes => ({
  type: 'FETCHED_THEMES_LIST',
  payload: {
    themes
  }
})

export const fetchThemesList = () => (dispatch, getState) => {
  if (getState().themesList.themes.length) return;
  dispatch(fetchingThemesList());
  getThemes().then((res) => {
    dispatch(fetchedThemesList(res.data.others));
    dispatch({
      type: 'RECEIVED_THEMES',
      payload: {
        data: normalize(res.data, themesSchema)
      }
    });
  });
}