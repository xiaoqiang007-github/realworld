exports.ids = [5];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=642866bb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Have an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Need an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(item,index){return ("<li>"+_vm._ssrEscape(_vm._s(item))+"</li>")}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" required=\"required\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" required=\"required\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=642866bb&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./utils/user.js

const login = data => {
  return Object(request["b" /* instance */])({
    url: '/api/users/login',
    method: 'POST',
    data
  });
};
const register = data => {
  return Object(request["b" /* instance */])({
    url: '/api/users',
    method: 'POST',
    data
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'loginIndex',
  middleware: 'login',

  data() {
    return {
      user: {
        username: 'zwq',
        email: '2467776065@qq.com',
        password: '123456'
      },
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: { ...Object(external_vuex_["mapMutations"])({
      addUser: 'user/addUser'
    }),

    login() {
      console.log('login');
    },

    async submit(e) {
      console.log('submit', e, this.user, login); // let req = ''

      try {
        const fn = this.isLogin ? login : register;
        console.log('fn', fn);
        const {
          data
        } = await fn({
          "user": {
            username: this.user.username,
            email: this.user.email,
            password: this.user.password
          }
        });
        console.log('data', data.user);
        this.$store.commit('user/addUser', data.user);
        this.$router.push('/'); // this.$store.commit('user/addUser', {
        //   bio: null,
        //   email: "2467776065@qq.com",
        //   image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
        //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI0Njc3NzYwNjVAcXEuY29tIiwidXNlcm5hbWUiOiJ6d3EiLCJpYXQiOjE2NDkyNTg4NzIsImV4cCI6MTY1NDQ0Mjg3Mn0.L1oaU7FC_C7-r3u6k2FG7r4tQRvcAjf1c6k5lzdcZEc",
        //   username: "zwq"
        // })

        this.errors = '';
      } catch (e) {
        console.log(e.response);
        console.log('err', JSON.stringify(e)); // this.errors = e.response.data
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3b6ce64b"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map