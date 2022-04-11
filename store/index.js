// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = () => new Vuex.Store({

//   state: {
//     user: null
//   },
//   mutations: {
//     addUser (state, user) {
//       state.user = user
//       console.log('state.user', state.user)
//     }
//   }
// })

// export default store
const cookieParser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  counter: 0,
  user: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const actions = {
  nuxtServerInit ({ commit }, { req, res }) {
    console.log('nuxtServerInit00', req.headers)
    let user = null
    // 将cookie初始化到容器中
    // console.log(window.document.cookie)
    if (req.headers.cookie) {
      const parsed = cookieParser.parse(req.headers.cookie)
      try{
        user = JSON.parse(parsed.user)
      }catch(err) {
        console.log(err)
      }
      commit('user/addUser', user)
    }
  }
}