
import { normalize } from 'normalizr';
import { getThemes } from '~/services/api';
import { themesSchema } from '~/schemas/themes';

export const fetchThemesList = () => (dispatch, getState) => {
  if (getState().timeline.themes.length) return;
  getThemes().then((res) => {
    dispatch({
      type: 'RECEIVED_THEMES',
      payload: {
        data: normalize(res.data, themesSchema)
      }
    });
  });
}