import { normalize } from 'normalizr';
import { getTheme } from '~/services/api';
import { themeSchema } from '~/schemas/themes';

export const fetchTheme = id => (dispatch, getState) => {
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
  })
}