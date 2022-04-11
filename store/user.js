// 仅在客户端加载包
const Cookie = process.client ? require('js-cookie'):undefined
export const state = () => ({
  // list: []
  user: null
})

export const mutations = {
  addUser (state, user) {
    console.log('addUser', user)
    // console.log('addUser', Cookies )
    state.user = user
    console.log('Cookie', Cookie)
    // sessionStorage.setItem('user', JSON.stringify(user))
    Cookie && Cookie.set('user', JSON.stringify(state.user))
    // console.log('state.user', JSON.stringify(state.user))
  },
  clearUser(state) {
    state.user = null
  }
}

// export const actions = {
//   nuxtServerInit ({ commit }, { req }) {
//     console.log('nuxtServerInit', req.session, req.response )
//     if (req.session.user) {
//       commit('user/addUser', req.session.user)
//     }
//   }
// }