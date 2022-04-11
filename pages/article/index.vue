<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>How to build webapps that scale</h1>

        <!-- <div class="article-meta">
          <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; Follow Eric Simons <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">(29)</span>
          </button>
        </div> -->
        <articleMeta  :article="article"/>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body">
          <!-- <p>
            Web development technologies have evolved at an incredible clip over
            the past few years.
          </p>
          <h2 id="introducing-ionic">Introducing RealWorld.</h2>
          <p>It's a great solution for learning how other frameworks work.</p> -->
          <!-- {{ }} -->
          
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <articleMeta :article="article" />
        <!-- <div class="article-meta">
          <a href="profile.html"
            ><img src="http://i.imgur.com/Qr71crq.jpg"
          /></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; Follow Eric Simons
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">(29)</span>
          </button>
        </div> -->
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <articleComments :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleMeta from './components/article-meta.vue'
import articleComments from './components/article-comments.vue'
import { getArticles } from '@/utils/article.js'
var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();
// import { addFavorite, unFavorite } from '@/api/articles/:slug'
// var result = md.render('# markdown-it rulezz!');

export default {
  async asyncData (context) {
    console.log('context', context)
    const { params } = context
    console.log('params', params, getArticles)
    const { data } = await getArticles({ slug: params.slug })
    console.log('data', data)
    const { article } = data
    console.log('article', article)
    article.body = md.render(article.body);
    return { project: 'nuxt', article }
  },
  components: {
    'articleMeta': articleMeta,
    'articleComments': articleComments
  },
  // 非常利于SEO优化的
  head() {
      return {
        title: this.article.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.article.description
          }
        ]
      }
    }

}
</script>

<style>
</style>