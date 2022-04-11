<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="article.title"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                v-model="article.tagList"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags, for example: reactjs,angularjs"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click.prevent="createArticle"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticle, updateArticle, getArticles } from '@/utils/article.js'
export default {
  name: 'editorIndex',
  middleware: 'authenticated',
  data () {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: ''
      }
    }
  },
  methods: {
    async createArticle() {
      console.log(this.article)
      let article = JSON.parse(JSON.stringify(this.article))
      if(article.tagList) article.tagList = ''
      article.tagList = article.tagList.split(',')
      if(this.$route.query.slug) {
        const { data } = await updateArticle({slug: this.$route.query.slug},article)
        console.log('createArticle', data)
      }else {
        const { data } = await createArticle({slug: this.$route.query.slug},article)
        console.log('createArticle', data)

      }
    },
    async init() {
      const {data} = await getArticles({slug: this.$route.query.slug})
      console.log('getArticles', data)
      this.article = data.article
    }
  },
  mounted () {
    console.log('query', this.$route)
      if(this.$route.query.slug) {
        this.init()
      }
  }
}
</script>

<style>
</style>