<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  v-model="currentUser.image"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="currentUser.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="currentUser.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="currentUser.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="currentUser.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button
                @click.prevent="updateUserFn"
                class="btn btn-lg btn-primary pull-xs-right"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click.prevent="logout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile, getUser, updateUser } from '@/utils/settings.js'
import { mapMutations, mapState } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'settings',
  middleware: 'authenticated',
  computed: {

  },
  data () {
    return {
      currentUser: {
        image: '',
        username: '',
        bio: '',
        email: '',
        password: ''
        //               bio: null
        // email: "2467776065@qq.com"
        // image: "https://api.realworld.io/images/smiley-cyrus.jpeg"
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI0Njc3NzYwNjVAcXEuY29tIiwidXNlcm5hbWUiOiJ6d3EiLCJpYXQiOjE2NDk1NjE3OTIsImV4cCI6MTY1NDc0NTc5Mn0.-QIJe_bEy9yFkMLSOYac_qqssAW2LCZ9GulkqndswfY"
        // username: "zwq"
      }
    }
  },
  methods: {
    ...mapMutations(['user', ['clearUser']]),
    async getUserFn () {
      const { data } = await getUser({
        username: this.$route.query.username
      })
      this.currentUser = data.user
      console.log(data)
      console.log('settings', this.currentUser)
    },
    async updateUserFn () {
      const { data } = await updateUser(this.currentUser)
      console.log('updateUserFn', data)
      console.log('this.$message', this.$message)
      //   this.getUserFn()
      this.$message('操作成功');
    //   setTimeout(() => {
    //     this.logout()
    //   }, 2000)
    },
    async logout () {
      Cookie.set('user', '')
      location.reload()
      // this.clearUser()
      // this.$router.push('/login')
    }
  },
  mounted () {
    this.getUserFn()
  }
}
</script>

<style>
</style>