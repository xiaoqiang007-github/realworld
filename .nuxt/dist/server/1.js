exports.ids = [1];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("a44df956", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pagetion-wrapper{margin-bottom:40px}.pagetion{width:20px;height:20px;display:inline-block;border:1px solid #eee;text-align:center;line-height:20px;cursor:pointer}.pagetion-active{background-color:#87ceeb;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=315d2496&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'your_feed',
                },attrs:{"exact":"","to":{
                  name: 'homeIndex',

                  query: {
                    tab: 'your_feed',
                  },
                }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'global_feed',
                },attrs:{"exact":"","to":{
                  name: 'homeIndex',

                  query: {
                    tab: 'global_feed',
                  },
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'tag',
                },attrs:{"to":{
                  name: 'homeIndex',

                  query: {
                    tab: 'tag',
                    tag: _vm.tag,
                  },
                }}},[_vm._v("# "+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articleList),function(item){return (_vm.articleList && _vm.articleList.length>0)?_vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                name: 'profile',
                params: { username: item.author.username },
              }}},[_c('img',{attrs:{"src":item.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                  name: 'profile',
                  params: { username: item.author.username },
                }}},[_vm._v(_vm._s(item.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(item.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",item.isDisable))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",item.favorited ? 'active' : ''))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(item.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: (_vm.user && _vm.user.username && item.author.username === _vm.user.username) ? 'editor' :'article', query: { slug: item.slug } }}},[_c('h1',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.body))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2):_vm._e()})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pagetion-wrapper col-md-9\">","</div>",_vm._l((_vm.totalPage),function(pageItem){return _c('nuxt-link',{key:pageItem,staticClass:"pagetion",class:{ 'pagetion-active': pageItem === _vm.page },attrs:{"to":{
            name: 'homeIndex',
            query: { page: pageItem, tag: _vm.$route.query.tag, tab: _vm.tab },
          }}},[_vm._v("\n          "+_vm._s(pageItem))])}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(tag,index){return _c('nuxt-link',{key:index,staticClass:"tag-pill tag-default",attrs:{"to":{ name: 'homeIndex', query: { tab: 'tag', tag: tag } }}},[_vm._v(_vm._s(tag))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=315d2496&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./utils/home.js

const getArticleList = (data = {}) => {
  return Object(request["b" /* instance */])({
    url: '/api/articles',
    method: 'GET',
    params: data
  });
};
const getTags = (data = {}) => {
  return Object(request["b" /* instance */])({
    url: '/api/tags',
    method: 'GET',
    params: data
  });
};
const getarticlesFeed = (data = {}) => {
  return Object(request["b" /* instance */])({
    url: '/api/articles/feed',
    method: 'GET',
    params: data
  });
};
// CONCATENATED MODULE: ./utils/favorite.js

const addFavorite = data => {
  return Object(request["b" /* instance */])({
    url: `/api/articles/${data.slug}/favorite`,
    method: 'POST'
  });
};
const unFavorite = data => {
  return Object(request["b" /* instance */])({
    url: `/api/articles/${data.slug}/favorite`,
    method: 'DELETE'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'homeIndex',
  // middleware: 'authenticated',
  watchQuery: ['page', 'tag', 'tab'],

  created() {// this.getArticleListFn()
  },

  data() {
    return {// articleList: []
    };
  },

  async asyncData({
    query,
    store
  }) {
    console.log('asyncData');
    const page = Number.parseInt(query.page || 1);
    const limit = 2;
    const tag = query.tag; // const { data } = await getArticleList({
    //   limit,
    //   offset: (page - 1) * limit
    // })
    // const { articles, articlesCount } = data
    // // this.articleList = articles || [] // 页面模板用不到
    // console.log('getArticleListFn', data)
    // const { data: tags } = await  getTags()
    // console.log('tags', tags)

    const tab = query.tab || 'global_feed'; // if(store.state.user.user)
    // console.log('store.state.user', store.state)

    const getArticleFn = store.state.user.user && tab === 'your_feed' ? getarticlesFeed : getArticleList;
    const [articlesObj, tagsObj] = await Promise.all([getArticleFn({
      limit,
      offset: (page - 1) * limit,
      tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articlesObj.data; // console.log('articlesObj.articles', articles)

    articles.forEach(article => {
      article.isDisable = false;
    });
    const {
      tags
    } = tagsObj.data;
    return {
      articleList: articles || [],
      articlesCount: articlesCount,
      page,
      limit,
      tags: tags,
      tag,
      tab: query.tab || 'global_feed'
    };
  },

  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },

    ...Object(external_vuex_["mapState"])("user", ["user"])
  },

  mounted() {
    console.log('user', this.user);
  },

  methods: {
    async clickFn(item) {
      item.isDisable = true;
      const {
        favorited,
        slug
      } = item;
      let fn = addFavorite;
      if (favorited) fn = unFavorite;
      const data = await fn({
        slug
      });

      if (favorited) {
        item.favoritesCount -= 1;
      } else {
        item.favoritesCount += 1;
      }

      item.favorited = !item.favorited;
      item.isDisable = false;
      console.log('fn...', data);
    }

  } // methods: {
  //   async getArticleListFn() {
  //     const { data } = await getArticleList()
  //     const { articles, articlesCount } = data
  //     this.articleListFn = articles || []
  //     console.log('getArticleListFn', data)
  //   }
  // }

});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2c82f499"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map