import axios from 'axios';
import pkg from '../../package.json';

let instance;

if (process.env.NODE_ENV !== 'development') {
  instance = axios.create({
    baseURL: `http://45.32.37.144:${pkg.proxySrverPort}`,
    timeout: 10000
  });
} else {
  instance = axios;
}

export function getLatestStories() {
  return instance.get('/api/4/news/latest')
}

export function getStoriesBefore(date) {
  return instance.get(`/api/4/news/before/${date}`)
}

export function getStory(id) {
  return instance.get(`/api/4/news/${id}`)
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