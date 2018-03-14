import axios from 'axios';

export function getLatestStories() {
  return axios.get('/api/4/news/latest')
}

export function getStoriesBefore(date) {
  return axios.get(`/api/4/news/before/${date}`)
}

export function getStory(id) {
  return axios.get(`/api/4/news/${id}`)
}

export function getStoryLongComments(id) {
  return axios.get(`/api/4/story/${id}/long-comments`)
}

export function getStoryShortComments(id) {
  return axios.get(`/api/4/story/${id}/short-comments`)
}

export function getThemes() {
  return axios.get('/api/4/themes')
}

export function getTheme(id) {
  return axios.get(`/api/4/theme/${id}`)
}