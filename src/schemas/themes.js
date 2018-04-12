import { schema } from 'normalizr';

const theme = new schema.Entity('stories');
const themes = new schema.Entity('themes');

export const themeSchema = new schema.Object({
  stories: new schema.Array(theme)
});

export const themesSchema = new schema.Object({
  others: new schema.Array(themes)
});
