import axios from 'axios';

export function getLatestStories() {
  return axios.get('/api/4/news/latest')
}

export function getNews(id) {
  return axios.get(`/api/4/news/${id}`)
}