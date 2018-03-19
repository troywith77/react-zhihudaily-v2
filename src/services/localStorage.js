export const get = (key) => {
  try {
    if (!localStorage[key]) return;
    return JSON.parse(localStorage[key]);
  } catch (err) {
    console.log(err);
    return;
  }
};

export const set = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage[key] = serializedData;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getPersistedState = () => {
  return get('storyState');
};

export const persistState = (key, value) => {
  const state = get('storyState') || {};
  state[key] = JSON.stringify(value);
  set('storyState', state);
};

export default {
  get,
  set
};