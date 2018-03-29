import { schema } from 'normalizr';

const story = new schema.Entity('stories');
const topStory = new schema.Entity('topStories');
const date = new schema.Entity('date');

export const latestStorySchema = new schema.Object({
  date,
  stories: new schema.Array(story),
  top_stories: new schema.Array(topStory)
});

export const historyStorySchema = new schema.Object({
  date,
  stories: new schema.Array(story),
});
