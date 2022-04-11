<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="isLogin" to="/">Have an account?</nuxt-link>
            <nuxt-link v-else to="/login">Need an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <li v-for="(item, index) in errors" :key="index">{{ item }}</li>
          </ul>

          <form @submit.prevent="submit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                required
                v-model="user.username"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                required
                v-model="user.email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="user.password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? 'Sign in' : 'Sign up' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/utils/user.js'
import { mapMutations } from 'vuex'


export default {
  name: 'loginIndex',
  middleware: 'login',
  data () {
    return {
      user: {
        username: 'zwq',
        email: '2467776065@qq.com',
        password: '123456'
      },
      errors: {}
    }
  },
  computed: {
    isLogin () {
      return this.$route.name === 'login'
    }
  },

  methods: {
    ...mapMutations({
      addUser: 'user/addUser'
    }),
    login () {
      console.log('login')
    },
    async submit (e) {
      console.log('submit', e, this.user, login)
      // let req = ''
      try {
        const fn = this.isLogin ? login : register
        console.log('fn', fn)
        const { data } = await fn({
          "user": {
            username: this.user.username,
            email: this.user.email,
            password: this.user.password
          }
        })
        console.log('data', data.user)
        this.$store.commit('user/addUser', data.user)
        this.$router.push('/')

        // this.$store.commit('user/addUser', {
        //   bio: null,
        //   email: "2467776065@qq.com",
        //   image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
        //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI0Njc3NzYwNjVAcXEuY29tIiwidXNlcm5hbWUiOiJ6d3EiLCJpYXQiOjE2NDkyNTg4NzIsImV4cCI6MTY1NDQ0Mjg3Mn0.L1oaU7FC_C7-r3u6k2FG7r4tQRvcAjf1c6k5lzdcZEc",
        //   username: "zwq"
        // })
        this.errors = ''
      } catch (e) {
        console.log(e.response)
        console.log('err', JSON.stringify(e))
        // this.errors = e.response.data
      }
    }
  }
}
</script>

<style>
</style>