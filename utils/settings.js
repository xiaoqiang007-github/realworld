import { instance as request } from '../plugins/request'

export const getProfile  = (data) => {

  return request({
    url: `/api/profiles/${data.username}`, method: 'GET'
  })
}

export const getUser  = (data) => {

  return request({
    url: `/api/user`, method: 'GET'
  })
}

export const updateUser  = (data) => {

  return request({
    url: `/api/user`, method: 'PUT',
    data: {
      user: data
    }
  })
}



// export const unFavorite = (data) => {

//   return request({
//     url: `/api/articles/${data.slug}/favorite`, method: 'DELETE'
//   })
// }