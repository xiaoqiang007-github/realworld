exports.ids = [7];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=434dc7dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.currentUser.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.currentUser.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\">"+_vm._ssrEscape(_vm._s(_vm.currentUser.bio))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.currentUser.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.currentUser.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">\n              Update Settings\n            </button></fieldset></form> <hr> <button class=\"btn btn-outline-danger\">\n          Or click here to logout.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=434dc7dc&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./utils/settings.js

const getProfile = data => {
  return Object(request["b" /* instance */])({
    url: `/api/profiles/${data.username}`,
    method: 'GET'
  });
};
const getUser = data => {
  return Object(request["b" /* instance */])({
    url: `/api/user`,
    method: 'GET'
  });
};
const updateUser = data => {
  return Object(request["b" /* instance */])({
    url: `/api/user`,
    method: 'PUT',
    data: {
      user: data
    }
  });
}; // export const unFavorite = (data) => {
//   return request({
//     url: `/api/articles/${data.slug}/favorite`, method: 'DELETE'
//   })
// }
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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


const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: 'settings',
  middleware: 'authenticated',
  computed: {},

  data() {
    return {
      currentUser: {
        image: '',
        username: '',
        bio: '',
        email: '',
        password: '' //               bio: null
        // email: "2467776065@qq.com"
        // image: "https://api.realworld.io/images/smiley-cyrus.jpeg"
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI0Njc3NzYwNjVAcXEuY29tIiwidXNlcm5hbWUiOiJ6d3EiLCJpYXQiOjE2NDk1NjE3OTIsImV4cCI6MTY1NDc0NTc5Mn0.-QIJe_bEy9yFkMLSOYac_qqssAW2LCZ9GulkqndswfY"
        // username: "zwq"

      }
    };
  },

  methods: { ...Object(external_vuex_["mapMutations"])(['user', ['clearUser']]),

    async getUserFn() {
      const {
        data
      } = await getUser({
        username: this.$route.query.username
      });
      this.currentUser = data.user;
      console.log(data);
      console.log('settings', this.currentUser);
    },

    async updateUserFn() {
      const {
        data
      } = await updateUser(this.currentUser);
      console.log('updateUserFn', data);
      console.log('this.$message', this.$message); //   this.getUserFn()

      this.$message('操作成功'); //   setTimeout(() => {
      //     this.logout()
      //   }, 2000)
    },

    async logout() {
      Cookie.set('user', '');
      location.reload(); // this.clearUser()
      // this.$router.push('/login')
    }

  },

  mounted() {
    this.getUserFn();
  }

});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5ef5be46"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map