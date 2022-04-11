import { instance as request } from '../plugins/request'

export const addFavorite  = (data) => {

  return request({
    url: `/api/articles/${data.slug}/favorite`, method: 'POST'
  })
}

export const unFavorite = (data) => {

  return request({
    url: `/api/articles/${data.slug}/favorite`, method: 'DELETE'
  })
}