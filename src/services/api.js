import axios from 'axios';

export function getLatestStories() {
  return axios.get('/api/4/news/latest')
}

export function getNews(id) {
  return axios.get(`/api/4/news/${id}`)
}

export function getThemes() {
  return axios.get('/api/4/themes')
}

export function getTheme(id) {
  return axios.get(`/api/4/theme/${id}`)
}