exports.ids = [3];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const getArticles = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* instance */ "b"])({
    url: `/api/articles/${data.slug}`,
    method: 'GET'
  });
};
const getComments = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* instance */ "b"])({
    url: `/api/articles/${data.slug}/comments`,
    method: 'GET'
  });
};
const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* instance */ "b"])({
    url: `/api/articles`,
    method: 'POST',
    data: {
      article: data
    }
  });
};
const updateArticle = (params, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* instance */ "b"])({
    url: `/api/articles/${params.slug}`,
    method: 'POST',
    data: {
      article: data
    }
  });
}; // export const unFavorite = (data) => {
//   return request({
//     url: `/api/articles/${data.slug}/favorite`, method: 'DELETE'
//   })
// }

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=45d8b9fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags, for example: reactjs,angularjs\""+(_vm._ssrAttr("value",(_vm.article.tagList)))+" class=\"form-control\"> <div class=\"tag-list\"></div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=45d8b9fe&

// EXTERNAL MODULE: ./utils/article.js
var utils_article = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: 'editorIndex',
  middleware: 'authenticated',

  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: ''
      }
    };
  },

  methods: {
    async createArticle() {
      console.log(this.article);
      let article = JSON.parse(JSON.stringify(this.article));
      if (article.tagList) article.tagList = '';
      article.tagList = article.tagList.split(',');

      if (this.$route.query.slug) {
        const {
          data
        } = await Object(utils_article["d" /* updateArticle */])({
          slug: this.$route.query.slug
        }, article);
        console.log('createArticle', data);
      } else {
        const {
          data
        } = await Object(utils_article["a" /* createArticle */])({
          slug: this.$route.query.slug
        }, article);
        console.log('createArticle', data);
      }
    },

    async init() {
      const {
        data
      } = await Object(utils_article["b" /* getArticles */])({
        slug: this.$route.query.slug
      });
      console.log('getArticles', data);
      this.article = data.article;
    }

  },

  mounted() {
    console.log('query', this.$route);

    if (this.$route.query.slug) {
      this.init();
    }
  }

});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "71d5bca7"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map