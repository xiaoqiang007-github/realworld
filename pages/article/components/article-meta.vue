<template>
  <div class="article-meta">
    <nuxxt-link
      :to="{
        name: 'profile',
        parmas: {
          username: article.author.username,
        },
      }"
      ><img :src="article.author.image"
    /></nuxxt-link>
    <div class="info">
      <nuxxt-link
        :to="{
          name: 'profile',
          parmas: {
            username: article.author.username,
          },
        }"
        class="author"
        >{{ article.author.username }}</nuxxt-link
      >
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following,
      }"
    >
      <i class="ion-plus-round"></i>
      &nbsp; Follow {{ article.author.username }}
      <span class="counter">(10)</span>
    </button>
    &nbsp;&nbsp;
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{
        active: article.favorited,
      }"
    >
      <i class="ion-heart"></i>
      &nbsp; Favorite Post
      <span class="counter">({{ article.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'articleMeta',
  props: {
    article: {
      required: true,
      type: Object
    }
  }

}
</script>

<style>
</style>