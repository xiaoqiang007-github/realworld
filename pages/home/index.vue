<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <!-- <a class="nav-link disabled" href="">Your Feed</a> -->
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'your_feed',
                  }"
                  exact
                  :to="{
                    name: 'homeIndex',

                    query: {
                      tab: 'your_feed',
                    },
                  }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link active" href="">Global Feed</a> -->
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'global_feed',
                  }"
                  exact
                  :to="{
                    name: 'homeIndex',

                    query: {
                      tab: 'global_feed',
                    },
                  }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li class="nav-item" v-if="tag">
                <!-- <a class="nav-link active" href=""># {{ tag }}</a> -->
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'tag',
                  }"
                  :to="{
                    name: 'homeIndex',

                    query: {
                      tab: 'tag',
                      tag: tag,
                    },
                  }"
                  ># {{ tag }}</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-if="articleList && articleList.length>0"
            v-for="item in articleList"
            :key="item.slug"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: { username: item.author.username },
                }"
                ><img :src="item.author.image"
              /></nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{
                    name: 'profile',
                    params: { username: item.author.username },
                  }"
                  class="author"
                  >{{ item.author.username }}</nuxt-link
                >
                <span class="date">{{ item.createdAt | date }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="item.favorited ? 'active' : ''"
                @click="clickFn(item)"
                :disabled="item.isDisable"
              >
                <i class="ion-heart"></i> {{ item.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{ name: (user && user.username && item.author.username === user.username) ? 'editor' :'article', query: { slug: item.slug } }"
              class="preview-link"
            >
              <h1>{{ item.title }}</h1>
              <p>{{ item.body }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- <div class="article-preview">
            <div class="article-meta">
              <a href="profile.html"
                ><img src="http://i.imgur.com/N4VcUeJ.jpg"
              /></a>
              <div class="info">
                <a href="" class="author">Albert Pai</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 32
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>
                The song you won't ever stop singing. No matter how hard you
                try.
              </h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div> -->
        </div>

        <!-- 分页 -->
        <div class="pagetion-wrapper col-md-9">
          <!-- <a :href="'/?page=' + pageItem" v-for="pageItem in totalPage" :key="pageItem" class="pagetion " :class="{'pagetion-active': pageItem === page}">{{pageItem}}</a> -->
          <nuxt-link
            :to="{
              name: 'homeIndex',
              query: { page: pageItem, tag: $route.query.tag, tab: tab },
            }"
            v-for="pageItem in totalPage"
            :key="pageItem"
            class="pagetion"
            :class="{ 'pagetion-active': pageItem === page }"
          >
            {{ pageItem }}</nuxt-link
          >
          <!-- <span class="pagetion">2</span>
          <span class="pagetion">3</span>
          <span class="pagetion">4</span> -->
        </div>

        <div class="col-md-9">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                v-for="(tag, index) in tags"
                :key="index"
                :to="{ name: 'homeIndex', query: { tab: 'tag', tag: tag } }"
                class="tag-pill tag-default"
                >{{ tag }}</nuxt-link
              >
              <!-- <a href="" class="tag-pill tag-default">javascript</a>
              <a href="" class="tag-pill tag-default">emberjs</a>
              <a href="" class="tag-pill tag-default">angularjs</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">mean</a>
              <a href="" class="tag-pill tag-default">node</a>
              <a href="" class="tag-pill tag-default">rails</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleList, getTags, getarticlesFeed } from '@/utils/home.js'
import { addFavorite, unFavorite } from '@/utils/favorite.js'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'homeIndex',
  // middleware: 'authenticated',
  watchQuery: ['page', 'tag', 'tab'],
  created () {
    // this.getArticleListFn()
  },
  data () {
    return {
      // articleList: []
    }
  },
  async asyncData ({ query, store }) {
    console.log('asyncData')
    const page = Number.parseInt(query.page || 1);
    const limit = 2
    const tag = query.tag
    // const { data } = await getArticleList({
    //   limit,
    //   offset: (page - 1) * limit
    // })
    // const { articles, articlesCount } = data
    // // this.articleList = articles || [] // 页面模板用不到
    // console.log('getArticleListFn', data)
    // const { data: tags } = await  getTags()
    // console.log('tags', tags)
    const tab = query.tab || 'global_feed'
    // if(store.state.user.user)
    // console.log('store.state.user', store.state)
    const getArticleFn = store.state.user.user && tab === 'your_feed' ? getarticlesFeed : getArticleList

    const [articlesObj, tagsObj] = await Promise.all([getArticleFn({
      limit,
      offset: (page - 1) * limit,
      tag
    }),
    getTags()]
    )
    const { articles, articlesCount } = articlesObj.data
    // console.log('articlesObj.articles', articles)
    articles.forEach(article => {
      article.isDisable = false
    })
    const { tags } = tagsObj.data
    return {
      articleList: articles || [],
      articlesCount: articlesCount,
      page,
      limit,
      tags: tags,
      tag,
      tab: query.tab || 'global_feed'
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    },
    ...mapState("user", ["user"])
  },
  mounted() {
    console.log('user', this.user)
  },
  methods: {
    async clickFn (item) {
      item.isDisable = true
      const { favorited, slug } = item
      let fn = addFavorite
      if (favorited) fn = unFavorite
      const data = await fn({ slug })
      if (favorited) {
        item.favoritesCount -= 1
      } else {
        item.favoritesCount += 1
      }
      item.favorited = !item.favorited
      item.isDisable = false
      console.log('fn...', data)
    }
  }
  // methods: {
  //   async getArticleListFn() {
  //     const { data } = await getArticleList()
  //     const { articles, articlesCount } = data
  //     this.articleListFn = articles || []
  //     console.log('getArticleListFn', data)
  //   }
  // }
}
</script>

<style>
.pagetion-wrapper {
  margin-bottom: 40px;
}
.pagetion {
  width: 20px;
  height: 20px;
  display: inline-block;
  /* margin: 10px; */
  border: 1px solid #eee;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
}
.pagetion-active {
  background-color: skyblue;
  color: #fff;
}
</style>