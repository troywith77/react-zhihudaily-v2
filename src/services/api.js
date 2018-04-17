import axios from 'axios';
import { getBaseURL } from './env';

const baseURL = getBaseURL();

const instance = axios.create({
  baseURL,
  timeout: 10000
});

export function getLatestStories() {
  return instance.get('/api/4/news/latest')
}

export function getStoriesBefore(date) {
  return instance.get(`/api/4/news/before/${date}`)
}

export function getStory(id) {
  return instance.get(`/api/4/news/${id}`)
}

export function getStoryExtra(id) {
  return instance.get(`/api/4/story-extra/${id}`)
}

export function getStoryLongComments(id) {
  return instance.get(`/api/4/story/${id}/long-comments`)
}

export function getStoryShortComments(id) {
  return instance.get(`/api/4/story/${id}/short-comments`)
}

export function getThemes() {
  return instance.get('/api/4/themes')
}

export function getTheme(id) {
  return instance.get(`/api/4/theme/${id}`)
}