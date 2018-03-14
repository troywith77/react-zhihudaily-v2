import axios from 'axios';

let instance;

if (process.env.NODE_ENV !== 'development') {
  instance = axios.create({
    baseURL: 'http://127.0.0.1:8082',
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