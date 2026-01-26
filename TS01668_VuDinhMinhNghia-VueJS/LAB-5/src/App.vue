<script setup>
import { ref } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = ref([])

function addPost(post) {
  posts.value.push(post)
}
</script>

<template>
  <div class="container mt-4">
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>
