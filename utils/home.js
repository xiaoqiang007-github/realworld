import { instance as request  } from '../plugins/request'

export const getArticleList = (data = {}) => {
  
  return request({
    url: '/api/articles', method: 'GET', params: data
  })
}

export const getTags= (data = {}) => {
  
  return request({
    url: '/api/tags', method: 'GET', params: data
  })
}

export const getarticlesFeed= (data = {}) => {
  
  return request({
    url: '/api/articles/feed', method: 'GET', params: data
  })
}


