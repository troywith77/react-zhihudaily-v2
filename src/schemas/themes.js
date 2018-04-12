import { schema } from 'normalizr';

const themes = new schema.Entity('themes');

export const themesSchema = new schema.Object({
  others: new schema.Array(themes)
});