import { instance as request } from '../plugins/request'

export const getArticles  = (data) => {

  return request({
    url: `/api/articles/${data.slug}`, method: 'GET'
  })
}

export const getComments  = (data) => {
  return request({
    url: `/api/articles/${data.slug}/comments`, method: 'GET'
  })
}

export const createArticle  = (data) => {
  return request({
    url: `/api/articles`, method: 'POST',
    data: {
      article: data
    }
  })
}

export const updateArticle  = (params,data) => {
  return request({
    url: `/api/articles/${params.slug}`, method: 'POST',
    data: {
      article: data
    }
  })
}




// export const unFavorite = (data) => {

//   return request({
//     url: `/api/articles/${data.slug}/favorite`, method: 'DELETE'
//   })
// }