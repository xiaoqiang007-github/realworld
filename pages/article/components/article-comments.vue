<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
        ></textarea>
      </div>
      <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>

    <div class="card" v-for="articleItem in commentList" :key="articleItem.id">
      <div class="card-block">
        <p class="card-text">
          {{articleItem.body}}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{
          name: 'profile',
          params: {
            username: articleItem.username
          }
        }" class="comment-author">
          <img
            :src="articleItem.author.image"
            class="comment-author-img"
          />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{
          name: 'profile',
          params: {
            username: articleItem.username
          }
        }" class="comment-author">{{articleItem.username}}</nuxt-link>
        <span class="date-posted">{{articleItem.createdAt | date}}</span>
      </div>
    </div>

    <!-- <div class="card">
      <div class="card-block">
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div class="card-footer">
        <a href="" class="comment-author">
          <img
            src="http://i.imgur.com/Qr71crq.jpg"
            class="comment-author-img"
          />
        </a>
        &nbsp;
        <a href="" class="comment-author">Jacob Schmidt</a>
        <span class="date-posted">Dec 29th</span>
        <span class="mod-options">
          <i class="ion-edit"></i>
          <i class="ion-trash-a"></i>
        </span>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getComments } from '@/utils/article.js'
export default {
  name: 'articleComments',
  props: {
    article: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      commentList: []
    }
  },
  async mounted() {
    // 数据不走SEO
    const { data } = await getComments({
      slug: this.article.slug
    })
    console.log('comments.data', data)
    this.commentList = data.comments
  }
}
</script>

<style>
</style>